"use strict";

(function(){
  var Rearmed = {
    isFunction: require('./../core/isFunction')
  };

  Array.prototype.maxBy = function(cb){
    var current, max;
    var hasCallback = Rearmed.isFunction(cb);
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
