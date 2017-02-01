(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Object.prototype.values){
    warn(Object, 'values');
  }

  Object.prototype.values = function(){
    var arr = [];
    for(var k in this){
      arr.push(this[k]);
    }
    return arr;
  };

  Object.defineProperty(Object.prototype, "values", {enumerable: false});
}(this));
