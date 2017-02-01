"use strict";

(function(){
  var Rearmed = {
    isFunction: require('./../core/isFunction')
  };

  Array.prototype.min = function(cb){
    var min;
    var hasCallback = Rearmed.isFunction(cb);
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
