(function(){
  "use strict";
  
  var warn = require('./../core/warn');
  if(String.prototype.excludes){
    warn(String, 'excludes');
  }

  String.prototype.excludes = function(x){
    return this.indexOf(x) === -1;
  }

  Object.defineProperty(String.prototype, "excludes", {enumerable: false});
}(this));
