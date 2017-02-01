"use strict";

(function(){
  Array.prototype.each = function(cb){
    for(var i=0;i<this.length;i++){
      cb(this[i], i);
    }
  };
  Object.defineProperty(Array.prototype, "each", {enumerable: false});
}(this));
