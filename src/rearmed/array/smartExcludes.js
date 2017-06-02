(function(){
  "use strict";

  require('./equals');

  var Rearmed = {
    isObjectLike: require('./../core/isObjectLike'),
    objEquals: function(obj1, obj2){
      for(var propName in obj1){
        if(obj1.hasOwnProperty(propName) != obj2.hasOwnProperty(propName)){
          return false;
        }else if(typeof obj1[propName] != typeof obj2[propName]){
          return false;
        }
      }
      for(var propName in obj2){
        var val = obj1[propName];
        var other = obj2[propName];
        if(obj1.hasOwnProperty(propName) != obj2.hasOwnProperty(propName)){
          return false;
        }else if(typeof val != typeof other){
          return false;
        }

        if(!obj1.hasOwnProperty(propName)){
          continue;
        }

        if(Array.isArray(val) && Array.isArray(other)){
          if(!val.equals(other)){
            return false;
          }
        }else if(Rearmed.isObjectLike(val) && Rearmed.isObjectLike(other)){
          if(!Rearmed.objEquals(val, other)){
            return false;
          }
        }else if(val != other){
         return false;
        }
      }
      return true;
    }

  };

  var warn = require('./../core/warn');
  if(Array.prototype.smartExcludes){
    warn('Array', 'smartExcludes');
  }

  Array.prototype.smartExcludes = function(x, fromIndex){
    var fromIndex = fromIndex || 0;
    var bool = true;
    for(var i=fromIndex;i<this.length;i++){
      var val = this[i];
      if(Rearmed.isObjectLike(val)){
        if(Array.isArray(val) ? val.equals(x) : Rearmed.objEquals(val, x)){
          bool = false;
          break;
        }
      }else if(val === x){
        bool = false;
        break;
      }
    }
    return bool;
  };

  Object.defineProperty(Array.prototype, "smartExcludes", {enumerable: false});
}(this));
