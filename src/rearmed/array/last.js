(function(){
  "use strict";

  Array.prototype.last = function(){
    return this[this.length-1];
  };
  Object.defineProperty(Array.prototype, "last", {enumerable: false});
}(this));
