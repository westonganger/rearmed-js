(function(){
  "use strict";

  Number.prototype.floor = function(){
    return Math.floor(this);
  };
  Object.defineProperty(Number.prototype, "floor", {enumerable: false});
}(this));
