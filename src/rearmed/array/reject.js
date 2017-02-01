(function(){
  "use strict";

  Array.prototype.reject = function(cb){
    return this.filter(function(x, i){
      return !cb(x,i);
    });
  };
  Object.defineProperty(Array.prototype, "reject", {enumerable: false});
}(this));
