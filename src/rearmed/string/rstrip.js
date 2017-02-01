"use strict";

(function(){
  String.prototype.rstrip = function(){
    return this.replace(/\s+$/g,'');
  };
  Object.defineProperty(String.prototype, "rstrip", {enumerable: false});
}(this));
