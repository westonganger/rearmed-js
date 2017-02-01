"use strict";

(function(){
  Object.prototype.hasKey = function(key){
    var bool = false;
    for(var k in this){
      if(k === key){
        bool = true;
        break;
      }
    }
    return bool;
  };
  Object.defineProperty(Object.prototype, "hasKey", {enumerable: false});
}(this));
