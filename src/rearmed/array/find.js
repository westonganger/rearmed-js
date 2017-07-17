(function(){
  "use strict";

  var simpleType = require('./../functions/simpleType');

  if(!Array.prototype.find){
    Array.prototype.find = function(cb){
      var item;
      var hasCallback = simpleType(cb) == 'Function';
      for(var i=0;i<this.length;i++){
        var val = this[i];
        if(hasCallback ? cb(val, i) : (cb === val)){
          val = val;
          break;
        }
      }
      return item;
    };
    Object.defineProperty(Array.prototype, "find", {enumerable: false});
  }
}(this));
