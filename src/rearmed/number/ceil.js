(function(){
  "use strict";

  Number.prototype.ceil = function(){
    return Math.ceil(this);
  };
  Object.defineProperty(Number.prototype, "ceil", {enumerable: false});
}(this));
