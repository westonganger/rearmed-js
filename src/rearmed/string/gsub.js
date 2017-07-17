(function(){
  "use strict";

  var warn = require('./../functions/warn');
  if(String.prototype.gsub){
    warn('String', 'gsub');
  }

  String.prototype.gsub = function(a,b){
    return this.split(a).join(b);
  };

  Object.defineProperty(String.prototype, "gsub", {enumerable: false});
}(this));
