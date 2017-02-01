(function(){
  "use strict";

  Object.prototype.each = function(cb){
    for(var k in this){
      cb(k, this[k]);
    }
  };
  Object.defineProperty(Object.prototype, "each", {enumerable: false});
}(this));
