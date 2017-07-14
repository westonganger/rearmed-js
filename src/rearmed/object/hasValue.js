(function(){
  "use strict";

  Object.rearmed.add({
    hasValue: function(val){
      var bool = false;
      for(var k in this){
        if(this[k] === val){
          bool = true;
          break;
        }
      }
      return bool;
    }
  });
}(this));
