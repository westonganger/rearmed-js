(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.notEmpty){
    warn(String, 'notEmpty');
  }

  String.prototype.notEmpty = function(){
    return this.length !== 0;
  };

  Object.defineProperty(String.prototype, "notEmpty", {enumerable: false});
}(this));
