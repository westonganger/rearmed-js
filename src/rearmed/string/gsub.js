(function(){
  "use strict";

  String.prototype.gsub = function(a,b){
    return this.split(a).join(b);
  };
  Object.defineProperty(String.prototype, "gsub", {enumerable: false});
}(this));
