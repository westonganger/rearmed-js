"use strict";

(function(){
  Array.prototype.last = function(){
    return this[this.length-1];
  };
  Object.defineProperty(Array.prototype, "last", {enumerable: false});
}(this));
