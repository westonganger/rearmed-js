(function(){
  "use strict";

  String.prototype.upcase = function(){
    return this.toUpperCase();
  };
  Object.defineProperty(String.prototype, "upcase", {enumerable: false});
}(this));
