(function(){
  "use strict";
  
  String.prototype.caseCmp = function(x){
    return this.toLowerCase() === x.toLowerCase();
  };
  Object.defineProperty(String.prototype, "caseCmp", {enumerable: false});
}(this));
