"use strict";

(function(){
  var Rearmed = {
    isObjectLike: require('./../core/isObjectLike')
  };

  Array.prototype.dig = function(){
    var val = this;
    for(var i=0;i<arguments.length;i++){
      if(Rearmed.isObjectLike(val)){
        val = val[arguments[i]];
      }else{
        val = undefined;
        break;
      }
    }
    return val;
  };
  Object.defineProperty(Array.prototype, "dig", {enumerable: false});
}(this));
