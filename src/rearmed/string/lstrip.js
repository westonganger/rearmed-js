"use strict";

(function(){
  String.prototype.lstrip = function(){
    return this.replace(/^\s+/g,'');
  };
  Object.defineProperty(String.prototype, "lstrip", {enumerable: false});
}(this));
