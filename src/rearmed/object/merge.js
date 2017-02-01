"use strict";

(function(){
  Object.prototype.merge = function(obj){
    var item = {};
    for(var k in this){
      item[k] = this[k];

      for(var k2 in object){
        item[k2] = object[k2];
      }
    }
    return item;
  };
  Object.defineProperty(Object.prototype, "merge", {enumerable: false});
}(this));
