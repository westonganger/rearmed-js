(function(){
  "use strict";

  var simpleType = require('./../functions/simpleType');

  var warn = require('./../functions/warn');
  if(Array.prototype.minBy){
    warn('Array', 'minBy');
  }

  Array.prototype.minBy = function(cb){
    var current, min;
    var hasCallback = simpleType(cb) == 'Function';
    for(var i=0;i<this.length;i++){
      var item = this[i];
      var val = hasCallback ? cb(item, i) : item;

      if(current === null || current === undefined || val < min){
        current = item;
        min = val;
      }
    }
    return current;
  };

  Object.defineProperty(Array.prototype, "minBy", {enumerable: false});
}(this));
