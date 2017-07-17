(function(){
  "use strict";

  var simpleType = require('./../functions/simpleType');

  var warn = require('./../functions/warn');
  if(Array.prototype.min){
    warn('Array', 'min');
  }

  Array.prototype.min = function(cb){
    var min;
    var hasCallback = simpleType(cb) == 'Function';
    for(var i=0;i<this.length;i++){
      var val = hasCallback ? cb(this[i], i) : this[i];

      if(min === null || min === undefined || val < min){
        min = val;
      }
    }
    return min;
  };

  Object.defineProperty(Array.prototype, "min", {enumerable: false});
}(this));
