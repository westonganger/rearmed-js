"use strict";

(function(){
  Number.prototype.round = function(){
    return Math.round(this);
  };
  Object.defineProperty(Number.prototype, "round", {enumerable: false});
}(this));
