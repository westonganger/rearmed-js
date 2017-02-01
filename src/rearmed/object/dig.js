"use strict";

(function(){
  var Rearmed = {
    isObjectLike: require('./../core/isObjectLike')
  };

  Object.prototype.dig = function(){
    var val = this;
    for(var k in arguments){
      if(Rearmed.isObjectLike(val)){
        val = val[arguments[k]];
      }else{
        val = undefined;
        break;
      }
    }
    return val;
  };
  Object.defineProperty(Object.prototype, "dig", {enumerable: false});
}(this));
