(function(){
  "use strict";

  Object.rearmed.add({
    hasKey: function(key){
      var bool = false;
      for(var k in this){
        if(k === key){
          bool = true;
          break;
        }
      }
      return bool;
    }
  });
}(this));
