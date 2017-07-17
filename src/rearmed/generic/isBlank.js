(function(){
  "use strict";

  var warn = require('./../functions/warn');
  var isBlank = require('./../functions/isBlank');

  if(Object.prototype.isBlank){
    warn('Object', 'isBlank');
  }

  Object.prototype.isBlank = function(){
    return isBlank(this);
  };

  Object.defineProperty(Object.prototype, "isBlank", {enumerable: false});
}(this));
