(function(){
  "use strict";
  Array.prototype.all = function(cb){
    return this.every(cb);
  };
  Object.defineProperty(Array.prototype, "all", {enumerable: false});
}(this));
