(function(){
  "use strict";

  var simpleType = require('./../functions/simpleType');

  var warn = require('./../functions/warn');
  if(Array.prototype.maxBy){
    warn('Array', 'maxBy');
  }

  Array.prototype.maxBy = function(cb){
    var current, max;
    var hasCallback = simpleType(cb) == 'Function';
    for(var i=0;i<this.length;i++){
      var item = this[i];
      var val = hasCallback ? cb(item, i) : item;

      if(current === null || current === undefined || val > max){
        current = item;
        max = val;
      }
    }
    return current;
  };

  Object.defineProperty(Array.prototype, "maxBy", {enumerable: false});
}(this));
