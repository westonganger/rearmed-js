(function(){
  "use strict";

  Object.rearmed.add({
    values: function(){
      var arr = [];
      for(var k in this){
        arr.push(this[k]);
      }
      return arr;
    }
  });
}(this));
