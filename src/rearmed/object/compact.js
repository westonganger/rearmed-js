(function(){
  "use strict";

  Object.prototype.compact = function(bad){
    bad = bad || [null, undefined];
    
    if(arguments.length >= 2 && !Array.isArray(bad)){
      bad = arguments;
    }

    var arr = [];

    for(var k in this){
      var val = this[k];
      var bool = true;
      for(var i=0;i<bad.length;i++){
        if(val === bad[i]){
          bool = false; 
          break;
        }

      }
      if(bool){
        arr.push(val);
      }
    }
    return arr;
  };
  Object.defineProperty(Object.prototype, "compact", {enumerable: false});
}(this));
