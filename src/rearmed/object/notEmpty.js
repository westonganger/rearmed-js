"use strict";

(function(){
  Object.prototype.notEmpty = function(){
    return this.length > 0;
  };
  Object.defineProperty(Object.prototype, "notEmpty", {enumerable: false});
}(this));
