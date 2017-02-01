(function(){
  "use strict";

  String.prototype.empty = function(){
    return this.length === 0;
  };
  Object.defineProperty(String.prototype, "empty", {enumerable: false});
}(this));
