(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Object.prototype.notEmpty){
    warn('Object', 'notEmpty');
  }

  Object.prototype.notEmpty = function(){
    return Object.keys(this).length > 0;
  };

  Object.defineProperty(Object.prototype, "notEmpty", {enumerable: false});
}(this));
