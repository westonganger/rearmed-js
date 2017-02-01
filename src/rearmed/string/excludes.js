"use strict";

(function(){
  String.prototype.excludes = function(x){
    return this.indexOf(x) === -1;
  }
  Object.defineProperty(String.prototype, "excludes", {enumerable: false});
}(this));
