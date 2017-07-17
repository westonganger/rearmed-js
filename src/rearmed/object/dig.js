(function(){
  "use strict";

  var simpleType = require('./../functions/simpleType');

  Object.rearmed.add({
    dig: function(){
      var keys;
      if(arguments.length === 0){
        keys = [];
      }else if(arguments.length === 1){
        if(Array.isArray(arguments[0])){
          keys = arguments[0];
        }else{
          keys = [arguments[0]];
        }
      }else{
        keys = arguments;
      }

      var val = this;
      for(var k in arguments){
        var type = simpleType(val);
        if(type == 'Array' || type == 'Object'){
          val = val[arguments[k]];
        }else{
          val = undefined;
          break;
        }
      }
      return val;
    }
  });
}(this));
