(function(){
  "use strict";

  Object.rearmed.add({
    keys: function(){
      var arr = [];
      for(var k in this){
        arr.push(k);
      }
      return arr;
    }
  });
}(this));
