# Ruby 3.2 부터 taint 가 없어졌지만 GitHub Pages 의 liquid 4.0.3 이 아직 부른다. 로컬 빌드(Ruby 3.4.5)에서만 쓴다.
# tools/site_env.sh 가 RUBYLIB·RUBYOPT 로 불러온다.
class Object
  def tainted?; false; end unless method_defined?(:tainted?)
  def taint; self; end unless method_defined?(:taint)
  def untaint; self; end unless method_defined?(:untaint)
end
