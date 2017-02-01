(function(){
  "use strict";
  
  var warn = require('./../core/warn');
  if(String.prototype.caseCmp){
    warn(String, 'caseCmp');
  }

  String.prototype.caseCmp = function(x){
    return this.toLowerCase() === x.toLowerCase();
  };

  Object.defineProperty(String.prototype, "caseCmp", {enumerable: false});
}(this));
