(function(){
  "use strict";

  String.prototype.strip = function(){
    if(String.prototype.trim){
      return this.trim();
    }else{
      return this.replace(/^\s+|\s+$/g,'');
    }
  };
  Object.defineProperty(String.prototype, "strip", {enumerable: false});
}(this));
