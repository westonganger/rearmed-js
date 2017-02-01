(function(){
  "use strict";

  var Rearmed = {
    isFunction: require('./../core/isFunction')
  };

  Array.prototype.minBy = function(cb){
    var current, min;
    var hasCallback = Rearmed.isFunction(cb);
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
