(function(){
  "use strict";

  Object.rearmed.add({
    join: function(cb, delim){
      delim = delim || ', ';
      var str = '';
      var first = true;

      for(var k in this){
        if(first){
          first = false;
        }else{
          str += delim;
        }
        str += this[k];
      }
      return str;
    }
  });
}(this));
