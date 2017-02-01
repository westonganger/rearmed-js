"use strict";

(function(){
  String.prototype.startsWith = function(x){
    return this.substr(0, x.length) === x;
  };
  Object.defineProperty(String.prototype, "startsWith", {enumerable: false});
}(this));
