(function(){
  "use strict";

  String.prototype.downcase = function(){
    return this.toLowerCase();
  };
  Object.defineProperty(String.prototype, "downcase", {enumerable: false});
}(this));
