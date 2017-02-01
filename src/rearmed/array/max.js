(function(){
  "use strict";

  var Rearmed = {
    isFunction: require('./../core/isFunction')
  };

  var warn = require('./../core/warn');
  if(Array.prototype.max){
    warn(Array, 'max');
  }

  Array.prototype.max = function(cb){
    var max;
    var hasCallback = Rearmed.isFunction(cb);
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
