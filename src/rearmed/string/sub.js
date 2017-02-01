"use strict";

(function(){
  String.prototype.sub = function(a,b){
    return this.replace(a, b);
  };
  Object.defineProperty(String.prototype, "sub", {enumerable: false});
}(this));
