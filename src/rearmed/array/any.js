(function(){
  "use strict";
  Array.prototype.any = function(cb){
    return this.some(cb);
  };
  Object.defineProperty(Array.prototype, "any", {enumerable: false});
}(this));
