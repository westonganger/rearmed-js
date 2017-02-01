(function(){
  "use strict";

  Object.prototype.join = function(cb, delim){
    delim = delim || ', ';
    var str = '';
    var first = true;
    for(var k in this){
      if(first){
        str += delim;
        first = false;
      }
      str += this[k];
    }
    return str;
  };
  Object.defineProperty(Object.prototype, "join", {enumerable: false});
}(this));
