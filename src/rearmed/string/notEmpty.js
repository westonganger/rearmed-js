"use strict";

(function(){
  String.prototype.notEmpty = function(){
    return this.length !== 0;
  };
  Object.defineProperty(String.prototype, "notEmpty", {enumerable: false});
}(this));
