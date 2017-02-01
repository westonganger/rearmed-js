(function(){
  "use strict";

  Number.prototype.isInteger = function(){
    if(Number.isInteger){
      return Number.isInteger(this);
    }else{
      return isFinite(this) && Math.floor(this) === this;
    }
  };
  Object.defineProperty(Number.prototype, "isInteger", {enumerable: false});
}(this));
