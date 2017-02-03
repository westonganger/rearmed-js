(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.endsWith){
    warn(String, 'endsWith');
  }

  String.prototype.endsWith = function(x){
    return this.substr((this.length - x.length), this.length) === x;
  };

  Object.defineProperty(String.prototype, "endsWith", {enumerable: false});
}(this));
