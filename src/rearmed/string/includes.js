"use strict";

(function(){
  if(!String.prototype.includes){
    String.prototype.includes = function(x){
      return this.indexOf(x) !== -1;
    }
    Object.defineProperty(String.prototype, "includes", {enumerable: false});
  }
}(this));
