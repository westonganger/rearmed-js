"use strict";

(function(){
  Object.prototype.hasValue = function(val){
    var bool = false;
    for(var k in this){
      if(this[k] === val){
        bool = true;
        break;
      }
    }
    return bool;
  };
  Object.defineProperty(Object.prototype, "hasValue", {enumerable: false});
}(this));
