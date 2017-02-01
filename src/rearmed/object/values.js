(function(){
  "use strict";

  Object.prototype.values = function(){
    var arr = [];
    for(var k in this){
      arr.push(this[k]);
    }
    return arr;
  };
  Object.defineProperty(Object.prototype, "values", {enumerable: false});
}(this));
