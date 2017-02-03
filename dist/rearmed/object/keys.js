(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Object.prototype.keys){
    warn(Object, 'keys');
  }

  Object.prototype.keys = function(){
    var arr = [];
    for(var k in this){
      arr.push(k);
    }
    return arr;
  };

  Object.defineProperty(Object.prototype, "keys", {enumerable: false});
}(this));
