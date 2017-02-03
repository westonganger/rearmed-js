(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.empty){
    warn(String, 'empty');
  }

  String.prototype.empty = function(){
    return this.length === 0;
  };

  Object.defineProperty(String.prototype, "empty", {enumerable: false});
}(this));
