(function(){
  "use strict";

  var simpleType = require('./../functions/simpleType');

  if(!Array.prototype.findIndex){
    Array.prototype.findIndex = function(cb){
      var index = -1;
      var hasCallback = simpleType(cb) == 'Function';
      for(var i=0;i<this.length;i++){
        if(hasCallback ? cb(this[i], i) : (cb === this[i])){
          index = i;
          break;
        }
      }
      return index;
    };

    Object.defineProperty(Array.prototype, "findIndex", {enumerable: false});
  }
}(this));
