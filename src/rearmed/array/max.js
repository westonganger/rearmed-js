(function(){
  "use strict";

  var simpleType = require('./../functions/simpleType');

  var warn = require('./../functions/warn');
  if(Array.prototype.max){
    warn('Array', 'max');
  }

  Array.prototype.max = function(cb){
    var max;
    var hasCallback = simpleType(cb) == 'Function';
    for(var i=0;i<this.length;i++){
      var val = hasCallback ? cb(this[i], i) : this[i];

      if(max === null || max === undefined || val > max){
        max = val;
      }
    }
    return max;
  };

  Object.defineProperty(Array.prototype, "max", {enumerable: false});
}(this));
