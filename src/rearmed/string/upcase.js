"use strict";

(function(){
  String.prototype.upcase = function(){
    return this.toUpperCase();
  };
  Object.defineProperty(String.prototype, "upcase", {enumerable: false});
}(this));
