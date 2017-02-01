"use strict";

(function(){
  Object.prototype.keys = function(){
    var arr = [];
    for(var k in this){
      arr.push(k);
    }
    return arr;
  };
  Object.defineProperty(Object.prototype, "keys", {enumerable: false});
}(this));
