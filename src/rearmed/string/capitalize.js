"use strict";

(function(){
  String.prototype.capitalize = function(){
    return this.charAt(0).toUpperCase() + this.substr(1);
  };
  Object.defineProperty(String.prototype, "capitalize", {enumerable: false});
}(this));
