(function(){
  "use strict";

  Number.prototype.isOdd = function(){
    return isFinite(this) && Math.abs(this % 2) === 1;
  };
  Object.defineProperty(Number.prototype, "isOdd", {enumerable: false});
}(this));
