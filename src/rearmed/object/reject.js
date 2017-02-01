(function(){
  "use strict";

  Object.prototype.reject = function(cb){
    var obj = {};
    for(var k in this){
      var val = this[k];
      if(!cb(k, val)){
        obj[k] = val;
      }
    }
    return obj;
  };
  Object.defineProperty(Object.prototype, "reject", {enumerable: false});
}(this));
