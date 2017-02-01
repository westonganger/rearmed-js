(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.sub){
    warn(String, 'sub');
  }

  String.prototype.sub = function(a,b){
    return this.replace(a, b);
  };

  Object.defineProperty(String.prototype, "sub", {enumerable: false});
}(this));
