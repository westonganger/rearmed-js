(function(){
  "use strict";

  Object.prototype.select = function(cb){
    var obj = {};
    for(var k in this){
      var val = this[k];
      if(cb(k, val)){
        obj[k] = val;
      }
    }
    return obj;
  };
  Object.defineProperty(Object.prototype, "select", {enumerable: false});
}(this));
