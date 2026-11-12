# Browser runtime

Transformers.js 3.8.1, official complete browser bundle (`dist/transformers.min.js`) stored as `transformers.web.min.js`. ONNX Runtime WASM and its module come from the same npm archive. `vendor-manifest.json` records original paths, sizes and SHA256 hashes. Restore with `python3 tools/setup-browser-runtime.py` after authorizing the download.

The small controller and model-worker source are embedded in each model lecture. Educational calculations therefore require no network, including when the HTML is opened as a local file. Pretrained inference lazily loads this static runtime from the lab site and fixed-revision weights from Hugging Face. A model change terminates its worker and releases its WASM heap before the next model is loaded. No inference service, token or paid API is used. Website files use a relative runtime URL; downloaded HTML uses the canonical lab runtime URL. Caching and availability depend on the browser and network.

`fixtures.json` contains eight 320px thumbnails from the previously approved Oxford-IIIT Pet classroom subset. Original data attribution remains in `labs/colab/oxford-pets-classroom.zip` and the notebooks. Uploaded images are resized in the browser and passed to the local worker only.

Model choices and differences: `syllabus/browser-demo-map.json` at the course root. Versions and vendor hashes are pinned. Model weight licenses remain with their respective Hugging Face repositories. Transformers.js is Apache-2.0; ONNX Runtime is MIT. License texts are included here.
