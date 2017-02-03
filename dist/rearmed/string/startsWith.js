(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.startsWith){
    warn(String, 'startsWith');
  }

  String.prototype.startsWith = function(x){
    return this.substr(0, x.length) === x;
  };

  Object.defineProperty(String.prototype, "startsWith", {enumerable: false});
}(this));
