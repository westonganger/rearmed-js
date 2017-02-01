"use strict";

(function(){
  Object.prototype.any = function(cb){
    var bool = false;

    for(var k in this){
      if(cb(k, this[k])){
        bool = true;
        break;
      }
    }
    return bool;
  };
  Object.defineProperty(Object.prototype, "any", {enumerable: false});
}(this));
