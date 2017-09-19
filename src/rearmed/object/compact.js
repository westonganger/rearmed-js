(function(){
  "use strict";

  Object.rearmed.add({
    compact: function(bad){
      var bad;
      if(arguments.length === 0){
        bad = [null, undefined, ''];
      }else if(arguments.length === 1){
        if(Array.isArray(arguments[0])){
          bad = arguments[0];
        }else{
          bad = [arguments[0]];
        }
      }else{
        bad = arguments;
      }

      var obj = {};

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
          obj[k] = val;
        }
      }
      return obj;
    }
  });
}(this));
