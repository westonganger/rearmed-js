if(!Object.prototype.rearmed){
  function RearmedObject(obj){
    for(var k in obj){
      this[k] = obj[k];
    }
  }

  var simpleType = require('./../functions/simpleType');

  Object.prototype.rearmed = function(){
    return new RearmedObject(this);
  };
  Object.defineProperty(Object.prototype, 'rearmed', {enumerable: false});

  Object.rearmed = {
    config: {
      object: []
    },

    add: function(obj){
      if(simpleType(obj) == 'Object'){
        for(var k in obj){
          RearmedObject.prototype[k] = obj[k];
          Object.defineProperty(RearmedObject.prototype, k, {enumerable: false});

          if(Object.rearmed.config.object.indexOf(k) == -1){
            Object.rearmed.config.object.push(k);
          }else{
            console.warn("Warning: Overriding rearmed()." + method);
          }
        }
      }else{
        throw('argument must be an object');
      }
    },

    remove: function(){
      var methods;
      if(arguments.length === 0){
        methods = [];
      }else if(arguments.length === 1){
        if(Array.isArray(arguments[0])){
          methods = arguments[0];
        }else{
          methods = [arguments[0]];
        }
      }else{
        methods = arguments;
      }

      for(var k in methods){
        var i = Object.rearmed.config.object.indexOf(k);
        if(i != -1){
          RearmedObject.prototype[k] = undefined;
          Object.rearmed.config.object.splice(i, 1);
        }
      }
    }
  };

}
