(function(){
  "use strict";

  Array.prototype.notEmpty = function(){
    return this.length !== 0;
  };
  Object.defineProperty(Array.prototype, "notEmpty", {enumerable: false});
}(this));
