/* Browser-only numerical kernels and ONNX inference. No inference endpoint. */
const ROOT = new URL(self.AX_RUNTIME_BASE || 'https://moai.postech.ac.kr/teaching/27s-programming-for-ax/runtime/');
let T, active, activeKey, requestId;
let engineWorker, engineRepo, engineSequence=0;
async function engineCall(config, fixtures, source, operation, args){
 const key=JSON.stringify([config.repo,config.revision]);
 if(engineWorker && engineRepo!==key){engineWorker.terminate();engineWorker=null;}
 if(!engineWorker){
  const script="self.AX_RUNTIME_BASE="+JSON.stringify(ROOT.href)+";\n"+source;
  const url=URL.createObjectURL(new Blob([script],{type:"text/javascript"}));
  engineWorker=new Worker(url);URL.revokeObjectURL(url);engineRepo=key;
 }
 const id=++engineSequence;
 return await new Promise((resolve,reject)=>{
  engineWorker.onmessage=({data})=>{if(data.id!==id)return;if(data.type==="progress"){send("progress",data.value);return;}if(data.type==="error"){engineWorker.terminate();engineWorker=null;reject(Error(data.value));}else resolve(data.value);};
  engineWorker.onerror=event=>{engineWorker.terminate();engineWorker=null;reject(Error(event.message||"Model worker failed"));};
  engineWorker.postMessage({id,config,fixtures,engineOnly:true,operation,args});
 });
}
const send = (type, value) => postMessage({id:requestId,type,value});
const dot=(a,b)=>a.reduce((s,x,i)=>s+x*b[i],0);
const unit=a=>{const n=Math.hypot(...a)||1;return Array.from(a,x=>x/n)};
const soft=a=>{const m=Math.max(...a),e=a.map(x=>Math.exp(x-m)),z=e.reduce((s,x)=>s+x,0);return e.map(x=>x/z)};
const cosine=(a,b)=>dot(unit(a),unit(b));
const finite=(v,min,max,label)=>{v=Number(v);if(!Number.isFinite(v)||v<min||v>max)throw Error(`${label}: use ${min} to ${max}`);return v};
const integer=(v,min,max,label)=>{v=finite(v,min,max,label);if(!Number.isInteger(v))throw Error(`${label}: use a whole number`);return v};
async function library(){
 if(!T){T=await import(new URL('transformers.web.min.js',ROOT));T.env.allowLocalModels=false;T.env.backends.onnx.wasm.numThreads=1;T.env.backends.onnx.wasm.proxy=false;T.env.backends.onnx.wasm.wasmPaths=ROOT.href;}
 return T;
}
async function load(config,task){
 const key=JSON.stringify([config.repo,task]);if(key===activeKey)return active;
 if(active){await active.dispose();active=null;activeKey=null;}
 const lib=await library();
 const opts={model_file_name:config.fileName||null,revision:config.revision,dtype:'q8',device:'wasm',progress_callback:p=>{
  if(p.status==='progress')send('progress',`Loading ${config.name}: ${Math.round(p.progress||0)}% (${p.file})`);
 }};
 send('progress',`Loading ${config.name}. First run downloads weights into browser cache.`);
 if(task==='sam')active={model:await lib.SamModel.from_pretrained(config.repo,opts),processor:await lib.AutoProcessor.from_pretrained(config.repo,{revision:config.revision}),dispose(){return this.model.dispose()}};
 else active=await lib.pipeline(task,config.repo,opts);
 activeKey=key;return active;
}
function random(seed){let s=seed>>>0;return ()=>{s=(Math.imul(1664525,s)+1013904223)>>>0;return (s+.5)/4294967296}}
function gaussian(r){return Math.sqrt(-2*Math.log(r()))*Math.cos(2*Math.PI*r())}
function probe(X,labels,steps,rate){
 steps=integer(steps,1,500,'steps');rate=finite(rate,.001,2,'rate');
 if(X.length!==labels.length||X.length<4)throw Error('Provide matching images and labels (at least 4)');
 if(labels.some(y=>y!==0&&y!==1))throw Error('Labels must be 0 (dog) or 1 (cat)');
 const split=X.length-2,tr=X.slice(0,split),y=labels.slice(0,split);if(new Set(y).size!==2)throw Error('Training rows need both classes');
 let w=Array(X[0].length).fill(0),b=0;const sigmoid=x=>1/(1+Math.exp(-x));
 for(let e=0;e<steps;e++){const err=tr.map((x,i)=>sigmoid(dot(w,x)+b)-y[i]);w=w.map((v,j)=>v-rate*err.reduce((s,e,i)=>s+e*tr[i][j],0)/split);b-=rate*err.reduce((s,e)=>s+e,0)/split;}
 const predictions=X.map((x,i)=>({row:i,split:i<split?'train':'held-out',label:labels[i],pCat:sigmoid(dot(w,x)+b)}));
 return {classes:{0:'dog',1:'cat'},trainingRows:split,heldOutRows:2,weightsChanged:'Linear head only; DINOv2 frozen',predictions,heldOutAccuracy:predictions.slice(split).filter(x=>+(x.pCat>=.5)===x.label).length/2};
}
function diffusion(input){
 const n=integer(input.samples??48,4,128,'samples'),steps=integer(input.steps,1,100,'steps'),seed=integer(input.seed,0,2147483647,'seed');
 if(!['left','right','both'].includes(input.condition))throw Error('condition: left, right or both');
 const r=random(seed),centers=input.condition==='left'?[-2]:input.condition==='right'?[2]:[-2,2];
 let x=Array.from({length:n},()=>[gaussian(r)*3,gaussian(r)*3]);const initial=x.map(p=>p.slice());
 // Analytic score of a Gaussian mixture convolved with N(0, sigma^2 I).
 for(let k=0;k<steps;k++){const sigma=2*(1-k/steps)+.1,v=.16+sigma*sigma,lr=5*v/steps;
  x=x.map(p=>{const weights=soft(centers.map(c=>-((p[0]-c)**2+p[1]**2)/(2*v)));const cx=dot(weights,centers);return [p[0]+lr*(cx-p[0])/v,p[1]-lr*p[1]/v]});}
 return {kind:'educational-score-flow',seed,steps,condition:input.condition,initial,points:x,mean:x.reduce((s,p)=>[s[0]+p[0]/n,s[1]+p[1]/n],[0,0]),note:'Analytic 2D conditional score integration; no SD-Turbo or Show-o2 weights. This does not generate photographs.'};
}
function tabular(input){
 const n=integer(input.trainRows,8,80,'trainRows'),depth=integer(input.depth,1,5,'depth');
 const data=Array.from({length:120},(_,i)=>{const x=((i*37)%120)/60-1;return {x,y:2*x+.7*x*x+.15*Math.sin(i*2.3)}}),train=data.slice(0,n),test=data.slice(80);
 const avg=a=>a.reduce((s,r)=>s+r.y,0)/a.length;
 function fit(a,d){const mean=avg(a);if(!d||a.length<4)return {mean};let best=null;
  const sorted=a.slice().sort((a,b)=>a.x-b.x);for(let i=2;i<=sorted.length-2;i++){const left=sorted.slice(0,i),right=sorted.slice(i),l=avg(left),r=avg(right),loss=left.reduce((s,a)=>s+(a.y-l)**2,0)+right.reduce((s,a)=>s+(a.y-r)**2,0);if(!best||loss<best.loss)best={loss,left,right,cut:(sorted[i-1].x+sorted[i].x)/2};}
  return best?{cut:best.cut,left:fit(best.left,d-1),right:fit(best.right,d-1),mean}:{mean};}
 const tree=fit(train,depth),predict=(x,t=tree)=>t.cut===undefined?t.mean:predict(x,x<t.cut?t.left:t.right),mae=(a,fn)=>a.reduce((s,r)=>s+Math.abs(r.y-fn(r.x)),0)/a.length;
 return {kind:'regression-tree',trainRows:n,heldOutRows:test.length,depth,tree,trainMAE:mae(train,predict),testMAE:mae(test,predict),meanBaselineMAE:mae(test,()=>avg(train)),points:train.map(r=>[r.x,r.y]),prediction:test.map(r=>[r.x,predict(r.x)]),note:'CART-style regression tree trained here; not TabPFN or XGBoost.'};
}
function forecast(input){
 const period=integer(input.period,2,12,'period'),shift=finite(input.shift,-8,8,'shift'),series=Array.from({length:60},(_,i)=>2*Math.sin(2*Math.PI*i/period)+.05*i+(i>=48?shift:0));
 const forecasts=[24,36,48].map(origin=>{const truth=series.slice(origin,origin+12),prediction=truth.map((_,h)=>series[origin-period+h%period]),mae=truth.reduce((s,y,h)=>s+Math.abs(y-prediction[h]),0)/12;return {origin,mae,prediction,truth}});
 return {kind:'seasonal-naive',series,prediction:forecasts.at(-1).prediction.map((v,h)=>[48+h,v]),forecasts,meanMAE:forecasts.reduce((s,x)=>s+x.mae/3,0),note:'Past-only seasonal baseline with rolling origins; not Prophet or Chronos.'};
}
function attention(input){
 const t=finite(input.temperature,.1,3,'temperature'),cut=finite(input.threshold,0,1,'threshold'),scores=input.scores;
 if(!Array.isArray(scores)||scores.length!==16||scores.some(x=>!Number.isFinite(x)))throw Error('scores: exactly 16 finite logits');
 const weights=soft(scores.map(x=>x/t));return {kind:'attention-calculation',weights,selected:weights.map(x=>x>=cut),sum:weights.reduce((s,x)=>s+x,0),note:'Editable 4×4 educational attention logits; not measured DINO attention.'};
}
self.onmessage=async({data})=>{
 requestId=data.id;
 try{
  const input=data.input,fixtures=data.fixtures,config=data.config;
  const image=id=>{if(!fixtures[id])throw Error('Unknown image: '+id);return fixtures[id].src};
  const api={
   pipeline:task=>load(config,task),
   images:ids=>ids.map(image),image,
   cosine,unit,probe,attention,diffusion,tabular,forecast,
   async features(ids){const pipe=await load(config,'image-feature-extraction');const result=[];pipe.axFeatures??=new Map();for(const id of ids){const src=image(id);if(!pipe.axFeatures.has(src)){send('progress','Encoding '+id);const tensor=await pipe(src);pipe.axFeatures.set(src,unit(tensor.data.slice(0,tensor.dims.at(-1))));}result.push(pipe.axFeatures.get(src));}return result},
   async segment(id,point,box){
    const lib=await library(),sam=await load(config.sam||config,'sam'),raw=await lib.RawImage.read(image(id));
    if(!box && (!Array.isArray(point)||point.length!==2))throw Error('point: use [x,y] normalized to 0–1');
    if(!box)point.forEach(v=>finite(v,0,1,'point'));
    const opts=box?{input_boxes:[[box]]}:{};
    // SAM expects [image, point-batch, point, xy].
    if(!box)opts.input_points=[[[point[0]*raw.width,point[1]*raw.height]]];
    const inputs=await sam.processor(raw,opts),out=await sam.model(inputs),masks=await sam.processor.post_process_masks(out.pred_masks,inputs.original_sizes,inputs.reshaped_input_sizes);
    const scores=Array.from(out.iou_scores.data),best=scores.indexOf(Math.max(...scores)),tensor=masks[0],w=raw.width,h=raw.height,mask=Array.from(tensor.data.slice(best*w*h,(best+1)*w*h),v=>v?1:0);
    return {visual:{image:image(id),mask:{width:w,height:h,data:mask}},scores,selected:best,positivePixels:mask.reduce((s,x)=>s+x,0),note:'SlimSAM predicted mask quality is not measured IoU.'};
   },
   async detect(id,labels,threshold){if(!labels.length||labels.length>6)throw Error('Use 1–6 labels');const pipe=await load(config.detector||config,'zero-shot-object-detection');return await pipe(image(id),labels,{threshold:finite(threshold,.01,.9,'threshold'),top_k:3});},
   async grounded(id,labels,threshold){const boxes=await api.detect(id,labels,threshold);if(!boxes.length)return {visual:{image:image(id),boxes},boxes,note:'No box above threshold; no mask generated.'};const b=boxes[0].box,lib=await library(),raw=await lib.RawImage.read(image(id));const point=[Math.max(0,Math.min(1,(b.xmin+b.xmax)/(2*raw.width))),Math.max(0,Math.min(1,(b.ymin+b.ymax)/(2*raw.height)))];const masks=await api.segment(id,point);return {...masks,boxes,point,note:"Top detection center becomes a SlimSAM point prompt; box extent is not used. Mask score is predicted quality.",visual:{...masks.visual,boxes}}},
   async context(texts,word){if(!Array.isArray(texts)||texts.length!==2)throw Error('Use two sentences');const pipe=await load(config,'feature-extraction'),vectors=[];const tokens=[];for(const text of texts){const encoded=pipe.tokenizer(text),ids=Array.from(encoded.input_ids.data,Number),pieces=pipe.tokenizer.model.convert_ids_to_tokens(ids),idx=pieces.indexOf(word.toLowerCase());if(idx<0)throw Error('Use a single-token word present in both sentences');const out=await pipe(text,{pooling:'none',normalize:false});if(out.dims[2]!==384)throw Error('Expected 384 MiniLM hidden dimensions, not vocabulary logits');vectors.push(Array.from(out.data.slice(idx*out.dims[2],(idx+1)*out.dims[2])));tokens.push(pieces)}return {tokens,word,cosine:cosine(...vectors),firstEightDimensions:vectors.map(x=>x.slice(0,8)),hiddenDimensions:384,note:'Same token, contextual hidden states from MiniLM-L6; replaces BERT-base.'}},
   async clipCandidates(id,labels){const pipe=await load(config,'zero-shot-image-classification');if(labels.length<2||labels.length>8)throw Error('Use 2–8 candidate descriptions');return {visual:{image:image(id)},ranking:await pipe(image(id),labels,{hypothesis_template:'{}'}),note:'Softmax is conditional on this candidate set; not calibrated correctness.'}},
   async clipRetrieve(ids,text){const pipe=await load(config,'zero-shot-image-classification');const lib=await library();const token=pipe.tokenizer([text],{padding:true,truncation:true});const raw=await Promise.all(ids.map(id=>lib.RawImage.read(image(id))));const pixels=await pipe.processor(raw);const out=await pipe.model({...token,...pixels});const row=Array.from(out.logits_per_text.data);return {visual:{images:ids.map(id=>({id,src:image(id)}))},ranking:row.map((score,i)=>({image:ids[i],logit:score})).sort((a,b)=>b.logit-a.logit),note:'Raw text–image logits across the image gallery, not a per-image label softmax.'}},
   async caption(id,tokens){const pipe=await load(config,'image-to-text');return {visual:{image:image(id)},captions:await pipe(image(id),{max_new_tokens:integer(tokens,4,32,'maxTokens'),do_sample:false}),note:'ViT + GPT-2 caption model replaces Qwen3-VL. It generates captions, not instruction-following dialogue.'}}
  };
  // The editable source runs in a disposable worker, never in the slide DOM.
  let result;
  if(data.engineOnly){
   if(data.operation==='pipelineCall'){
    const pipe=await api.pipeline(data.args[0]);result=await pipe(...data.args[1]);
   }else result=await api[data.operation](...data.args);
  }else{
   // Each pretrained model gets a fresh WASM heap. The small controller survives
   // model switches, so composed source can await detection and then segmentation.
   for(const method of ['features','segment','detect','context','clipCandidates','clipRetrieve','caption']){
    api[method]=(...args)=>engineCall(method==='segment'?(config.sam||config):(method==='detect'?(config.detector||config):config),fixtures,data.workerSource,method,args);
   }
   api.pipeline=async task=>(...args)=>engineCall(config,fixtures,data.workerSource,'pipelineCall',[task,args]);
   const run=new (Object.getPrototypeOf(async function(){}).constructor)('api','input',data.code);
   result=await run(api,input);
  }
  send('result',result);
 }catch(error){send('error',error.message||String(error))}
};
