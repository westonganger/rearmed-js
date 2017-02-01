"use strict";

(function(){
  Number.prototype.isEven = function(){
    return isFinite(this) && this % 2 === 0;
  };
  Object.defineProperty(Number.prototype, "isEven", {enumerable: false});
}(this));
