(function(){
  "use strict";

  String.prototype.toBool = function(){
    if(this === 'true'){
      return true;
    }else if(this === 'false'){
      return false;
    }
  };
  Object.defineProperty(String.prototype, "toBool", {enumerable: false});
}(this));
