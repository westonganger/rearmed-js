(function(){
  "use strict";

  Array.prototype.empty = function(){
    return this.length === 0;
  };
  Object.defineProperty(Array.prototype, "empty", {enumerable: false});
}(this));
