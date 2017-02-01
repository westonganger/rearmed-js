"use strict";

(function(){
  var Rearmed = {
    isFunction: require('./../core/isFunction')
  };

  Array.prototype.sum = function(cb){
    var sum = 0;
    var hasCallback = Rearmed.isFunction(cb);
    for(var i=0;i<this.length;i++){
      var val = hasCallback ? cb(this[i], i) : this[i];

      if(isFinite(val)){
        sum += Number(val);
      }else{
        throw("`" + val + "` cannot be coerced to a Number");
      }
    }
    return sum;
  };
  Object.defineProperty(Array.prototype, "sum", {enumerable: false});
}(this));
