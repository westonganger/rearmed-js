(function(){
  "use strict";

  if(!Object.prototype.try){
    var simpleType = require('./../functions/simpleType');

    Object.prototype.try = function(x){
      var val = this[x];
      if(val || val === 0 || val === ''){
        if(simpleType(val) === 'Function'){
          if(arguments.length > 1){
            var args = Array.prototype.slice.call(arguments);
            args.shift();
          }
          val = val.apply(this, args);
        }
        return (val || val === 0 || val === '') ? val : false;
      }
      return false;
    };

    Object.defineProperty(Object.prototype, "try", {enumerable: false});
  }
}(this));
