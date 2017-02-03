(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function warn(type, method){
  console.warn("Rearmed-js Overriding " + type + " method: " + method, '. If this is a built-in browser method please report on Rearmed-js github issues.');
};

module.exports = warn;

},{}],2:[function(require,module,exports){
require('./string/capitalize');
require('./string/caseCmp');
require('./string/chars');
require('./string/downcase');
require('./string/empty');
require('./string/endsWith');
require('./string/excludes');
require('./string/gsub');
require('./string/includes');
require('./string/lstrip');
require('./string/notEmpty');
require('./string/reverse');
require('./string/rstrip');
require('./string/startsWith');
require('./string/strip');
require('./string/sub');
require('./string/titleize');
require('./string/toBool');
require('./string/upcase');

},{"./string/capitalize":3,"./string/caseCmp":4,"./string/chars":5,"./string/downcase":6,"./string/empty":7,"./string/endsWith":8,"./string/excludes":9,"./string/gsub":10,"./string/includes":11,"./string/lstrip":12,"./string/notEmpty":13,"./string/reverse":14,"./string/rstrip":15,"./string/startsWith":16,"./string/strip":17,"./string/sub":18,"./string/titleize":19,"./string/toBool":20,"./string/upcase":21}],3:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.capitalize){
    warn(String, 'capitalize');
  }

  String.prototype.capitalize = function(){
    return this.charAt(0).toUpperCase() + this.substr(1);
  };

  Object.defineProperty(String.prototype, "capitalize", {enumerable: false});
}(this));

},{"./../core/warn":1}],4:[function(require,module,exports){
(function(){
  "use strict";
  
  var warn = require('./../core/warn');
  if(String.prototype.caseCmp){
    warn(String, 'caseCmp');
  }

  String.prototype.caseCmp = function(x){
    return this.toLowerCase() === x.toLowerCase();
  };

  Object.defineProperty(String.prototype, "caseCmp", {enumerable: false});
}(this));

},{"./../core/warn":1}],5:[function(require,module,exports){
(function(){
  "use strict";
  
  var warn = require('./../core/warn');
  if(String.prototype.chars){
    warn(String, 'chars');
  }

  String.prototype.chars = function(){
    if(Array.prototype.from){
      return Array.from(this);
    }else{
      var array = [];

      for(var i=0;i < this.length;i++){
        array.push(this.charAt(i));
      }

      return array;
    }
  };

  Object.defineProperty(String.prototype, "chars", {enumerable: false});
}(this));

},{"./../core/warn":1}],6:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.downcase){
    warn(String, 'downcase');
  }

  String.prototype.downcase = function(){
    return this.toLowerCase();
  };

  Object.defineProperty(String.prototype, "downcase", {enumerable: false});
}(this));

},{"./../core/warn":1}],7:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.empty){
    warn(String, 'empty');
  }

  String.prototype.empty = function(){
    return this.length === 0;
  };

  Object.defineProperty(String.prototype, "empty", {enumerable: false});
}(this));

},{"./../core/warn":1}],8:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.endsWith){
    warn(String, 'endsWith');
  }

  String.prototype.endsWith = function(x){
    return this.substr((this.length - x.length), this.length) === x;
  };

  Object.defineProperty(String.prototype, "endsWith", {enumerable: false});
}(this));

},{"./../core/warn":1}],9:[function(require,module,exports){
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

},{"./../core/warn":1}],10:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.gsub){
    warn(String, 'gsub');
  }

  String.prototype.gsub = function(a,b){
    return this.split(a).join(b);
  };

  Object.defineProperty(String.prototype, "gsub", {enumerable: false});
}(this));

},{"./../core/warn":1}],11:[function(require,module,exports){
(function(){
  "use strict";

  if(!String.prototype.includes){
    String.prototype.includes = function(x){
      return this.indexOf(x) !== -1;
    }

    Object.defineProperty(String.prototype, "includes", {enumerable: false});
  }
}(this));

},{}],12:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.lstrip){
    warn(String, 'lstrip');
  }

  String.prototype.lstrip = function(){
    return this.replace(/^\s+/g,'');
  };

  Object.defineProperty(String.prototype, "lstrip", {enumerable: false});
}(this));

},{"./../core/warn":1}],13:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.notEmpty){
    warn(String, 'notEmpty');
  }

  String.prototype.notEmpty = function(){
    return this.length !== 0;
  };

  Object.defineProperty(String.prototype, "notEmpty", {enumerable: false});
}(this));

},{"./../core/warn":1}],14:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.reverse){
    warn(String, 'reverse');
  }

  String.prototype.reverse = function(){
    var array;

    if(Array.prototype.from){
      array = Array.from(this).reverse();
    }else{
      var array = [];

      for(var i=0;i < this.length;i++){
        array.unshift(this.charAt(i));
      }
    }

    return array.join('');
  };

  Object.defineProperty(String.prototype, "reverse", {enumerable: false});
}(this));

},{"./../core/warn":1}],15:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.rstrip){
    warn(String, 'rstrip');
  }

  String.prototype.rstrip = function(){
    return this.replace(/\s+$/g,'');
  };

  Object.defineProperty(String.prototype, "rstrip", {enumerable: false});
}(this));

},{"./../core/warn":1}],16:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.startsWith){
    warn(String, 'startsWith');
  }

  String.prototype.startsWith = function(x){
    return this.substr(0, x.length) === x;
  };

  Object.defineProperty(String.prototype, "startsWith", {enumerable: false});
}(this));

},{"./../core/warn":1}],17:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.strip){
    warn(String, 'strip');
  }

  String.prototype.strip = function(){
    if(String.prototype.trim){
      return this.trim();
    }else{
      return this.replace(/^\s+|\s+$/g,'');
    }
  };

  Object.defineProperty(String.prototype, "strip", {enumerable: false});
}(this));

},{"./../core/warn":1}],18:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.sub){
    warn(String, 'sub');
  }

  String.prototype.sub = function(a,b){
    return this.replace(a, b);
  };

  Object.defineProperty(String.prototype, "sub", {enumerable: false});
}(this));

},{"./../core/warn":1}],19:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.titleize){
    warn(String, 'titleize');
  }

  String.prototype.titleize = function(onlyFirstLetter){
    return this.split(' ').map(function(str){
      var s = str.charAt(0).toUpperCase();
      if(onlyFirstLetter === false){
        s += str.substr(1).toLowerCase();
      }else{
        s += str.substr(1);
      }
      return s;
    }).join(' ');
  };

  Object.defineProperty(String.prototype, "titleize", {enumerable: false});
}(this));

},{"./../core/warn":1}],20:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.toBool){
    warn(String, 'toBool');
  }

  String.prototype.toBool = function(){
    if(this === 'true'){
      return true;
    }else if(this === 'false'){
      return false;
    }
  };

  Object.defineProperty(String.prototype, "toBool", {enumerable: false});
}(this));

},{"./../core/warn":1}],21:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.upcase){
    warn(String, 'upcase');
  }

  String.prototype.upcase = function(){
    return this.toUpperCase();
  };

  Object.defineProperty(String.prototype, "upcase", {enumerable: false});
}(this));

},{"./../core/warn":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvcmVhcm1lZC9jb3JlL3dhcm4uanMiLCJzcmMvcmVhcm1lZC9zdHJpbmcuanMiLCJzcmMvcmVhcm1lZC9zdHJpbmcvY2FwaXRhbGl6ZS5qcyIsInNyYy9yZWFybWVkL3N0cmluZy9jYXNlQ21wLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL2NoYXJzLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL2Rvd25jYXNlLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL2VtcHR5LmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL2VuZHNXaXRoLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL2V4Y2x1ZGVzLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL2dzdWIuanMiLCJzcmMvcmVhcm1lZC9zdHJpbmcvaW5jbHVkZXMuanMiLCJzcmMvcmVhcm1lZC9zdHJpbmcvbHN0cmlwLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL25vdEVtcHR5LmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL3JldmVyc2UuanMiLCJzcmMvcmVhcm1lZC9zdHJpbmcvcnN0cmlwLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL3N0YXJ0c1dpdGguanMiLCJzcmMvcmVhcm1lZC9zdHJpbmcvc3RyaXAuanMiLCJzcmMvcmVhcm1lZC9zdHJpbmcvc3ViLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL3RpdGxlaXplLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL3RvQm9vbC5qcyIsInNyYy9yZWFybWVkL3N0cmluZy91cGNhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImZ1bmN0aW9uIHdhcm4odHlwZSwgbWV0aG9kKXtcbiAgY29uc29sZS53YXJuKFwiUmVhcm1lZC1qcyBPdmVycmlkaW5nIFwiICsgdHlwZSArIFwiIG1ldGhvZDogXCIgKyBtZXRob2QsICcuIElmIHRoaXMgaXMgYSBidWlsdC1pbiBicm93c2VyIG1ldGhvZCBwbGVhc2UgcmVwb3J0IG9uIFJlYXJtZWQtanMgZ2l0aHViIGlzc3Vlcy4nKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybjtcbiIsInJlcXVpcmUoJy4vc3RyaW5nL2NhcGl0YWxpemUnKTtcbnJlcXVpcmUoJy4vc3RyaW5nL2Nhc2VDbXAnKTtcbnJlcXVpcmUoJy4vc3RyaW5nL2NoYXJzJyk7XG5yZXF1aXJlKCcuL3N0cmluZy9kb3duY2FzZScpO1xucmVxdWlyZSgnLi9zdHJpbmcvZW1wdHknKTtcbnJlcXVpcmUoJy4vc3RyaW5nL2VuZHNXaXRoJyk7XG5yZXF1aXJlKCcuL3N0cmluZy9leGNsdWRlcycpO1xucmVxdWlyZSgnLi9zdHJpbmcvZ3N1YicpO1xucmVxdWlyZSgnLi9zdHJpbmcvaW5jbHVkZXMnKTtcbnJlcXVpcmUoJy4vc3RyaW5nL2xzdHJpcCcpO1xucmVxdWlyZSgnLi9zdHJpbmcvbm90RW1wdHknKTtcbnJlcXVpcmUoJy4vc3RyaW5nL3JldmVyc2UnKTtcbnJlcXVpcmUoJy4vc3RyaW5nL3JzdHJpcCcpO1xucmVxdWlyZSgnLi9zdHJpbmcvc3RhcnRzV2l0aCcpO1xucmVxdWlyZSgnLi9zdHJpbmcvc3RyaXAnKTtcbnJlcXVpcmUoJy4vc3RyaW5nL3N1YicpO1xucmVxdWlyZSgnLi9zdHJpbmcvdGl0bGVpemUnKTtcbnJlcXVpcmUoJy4vc3RyaW5nL3RvQm9vbCcpO1xucmVxdWlyZSgnLi9zdHJpbmcvdXBjYXNlJyk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihTdHJpbmcucHJvdG90eXBlLmNhcGl0YWxpemUpe1xuICAgIHdhcm4oU3RyaW5nLCAnY2FwaXRhbGl6ZScpO1xuICB9XG5cbiAgU3RyaW5nLnByb3RvdHlwZS5jYXBpdGFsaXplID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoaXMuc3Vic3RyKDEpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImNhcGl0YWxpemVcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcbiAgXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoU3RyaW5nLnByb3RvdHlwZS5jYXNlQ21wKXtcbiAgICB3YXJuKFN0cmluZywgJ2Nhc2VDbXAnKTtcbiAgfVxuXG4gIFN0cmluZy5wcm90b3R5cGUuY2FzZUNtcCA9IGZ1bmN0aW9uKHgpe1xuICAgIHJldHVybiB0aGlzLnRvTG93ZXJDYXNlKCkgPT09IHgudG9Mb3dlckNhc2UoKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJjYXNlQ21wXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIFxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKFN0cmluZy5wcm90b3R5cGUuY2hhcnMpe1xuICAgIHdhcm4oU3RyaW5nLCAnY2hhcnMnKTtcbiAgfVxuXG4gIFN0cmluZy5wcm90b3R5cGUuY2hhcnMgPSBmdW5jdGlvbigpe1xuICAgIGlmKEFycmF5LnByb3RvdHlwZS5mcm9tKXtcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMpO1xuICAgIH1lbHNle1xuICAgICAgdmFyIGFycmF5ID0gW107XG5cbiAgICAgIGZvcih2YXIgaT0wO2kgPCB0aGlzLmxlbmd0aDtpKyspe1xuICAgICAgICBhcnJheS5wdXNoKHRoaXMuY2hhckF0KGkpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJjaGFyc1wiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoU3RyaW5nLnByb3RvdHlwZS5kb3duY2FzZSl7XG4gICAgd2FybihTdHJpbmcsICdkb3duY2FzZScpO1xuICB9XG5cbiAgU3RyaW5nLnByb3RvdHlwZS5kb3duY2FzZSA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMudG9Mb3dlckNhc2UoKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJkb3duY2FzZVwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoU3RyaW5nLnByb3RvdHlwZS5lbXB0eSl7XG4gICAgd2FybihTdHJpbmcsICdlbXB0eScpO1xuICB9XG5cbiAgU3RyaW5nLnByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoID09PSAwO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImVtcHR5XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoKXtcbiAgICB3YXJuKFN0cmluZywgJ2VuZHNXaXRoJyk7XG4gIH1cblxuICBTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoID0gZnVuY3Rpb24oeCl7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RyKCh0aGlzLmxlbmd0aCAtIHgubGVuZ3RoKSwgdGhpcy5sZW5ndGgpID09PSB4O1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImVuZHNXaXRoXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIFxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKFN0cmluZy5wcm90b3R5cGUuZXhjbHVkZXMpe1xuICAgIHdhcm4oU3RyaW5nLCAnZXhjbHVkZXMnKTtcbiAgfVxuXG4gIFN0cmluZy5wcm90b3R5cGUuZXhjbHVkZXMgPSBmdW5jdGlvbih4KXtcbiAgICByZXR1cm4gdGhpcy5pbmRleE9mKHgpID09PSAtMTtcbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImV4Y2x1ZGVzXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihTdHJpbmcucHJvdG90eXBlLmdzdWIpe1xuICAgIHdhcm4oU3RyaW5nLCAnZ3N1YicpO1xuICB9XG5cbiAgU3RyaW5nLnByb3RvdHlwZS5nc3ViID0gZnVuY3Rpb24oYSxiKXtcbiAgICByZXR1cm4gdGhpcy5zcGxpdChhKS5qb2luKGIpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImdzdWJcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBpZighU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlcyl7XG4gICAgU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlcyA9IGZ1bmN0aW9uKHgpe1xuICAgICAgcmV0dXJuIHRoaXMuaW5kZXhPZih4KSAhPT0gLTE7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwiaW5jbHVkZXNcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG4gIH1cbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoU3RyaW5nLnByb3RvdHlwZS5sc3RyaXApe1xuICAgIHdhcm4oU3RyaW5nLCAnbHN0cmlwJyk7XG4gIH1cblxuICBTdHJpbmcucHJvdG90eXBlLmxzdHJpcCA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZSgvXlxccysvZywnJyk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwibHN0cmlwXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihTdHJpbmcucHJvdG90eXBlLm5vdEVtcHR5KXtcbiAgICB3YXJuKFN0cmluZywgJ25vdEVtcHR5Jyk7XG4gIH1cblxuICBTdHJpbmcucHJvdG90eXBlLm5vdEVtcHR5ID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcy5sZW5ndGggIT09IDA7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwibm90RW1wdHlcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKFN0cmluZy5wcm90b3R5cGUucmV2ZXJzZSl7XG4gICAgd2FybihTdHJpbmcsICdyZXZlcnNlJyk7XG4gIH1cblxuICBTdHJpbmcucHJvdG90eXBlLnJldmVyc2UgPSBmdW5jdGlvbigpe1xuICAgIHZhciBhcnJheTtcblxuICAgIGlmKEFycmF5LnByb3RvdHlwZS5mcm9tKXtcbiAgICAgIGFycmF5ID0gQXJyYXkuZnJvbSh0aGlzKS5yZXZlcnNlKCk7XG4gICAgfWVsc2V7XG4gICAgICB2YXIgYXJyYXkgPSBbXTtcblxuICAgICAgZm9yKHZhciBpPTA7aSA8IHRoaXMubGVuZ3RoO2krKyl7XG4gICAgICAgIGFycmF5LnVuc2hpZnQodGhpcy5jaGFyQXQoaSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcnJheS5qb2luKCcnKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZXZlcnNlXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihTdHJpbmcucHJvdG90eXBlLnJzdHJpcCl7XG4gICAgd2FybihTdHJpbmcsICdyc3RyaXAnKTtcbiAgfVxuXG4gIFN0cmluZy5wcm90b3R5cGUucnN0cmlwID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC9cXHMrJC9nLCcnKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyc3RyaXBcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCl7XG4gICAgd2FybihTdHJpbmcsICdzdGFydHNXaXRoJyk7XG4gIH1cblxuICBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGggPSBmdW5jdGlvbih4KXtcbiAgICByZXR1cm4gdGhpcy5zdWJzdHIoMCwgeC5sZW5ndGgpID09PSB4O1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInN0YXJ0c1dpdGhcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKFN0cmluZy5wcm90b3R5cGUuc3RyaXApe1xuICAgIHdhcm4oU3RyaW5nLCAnc3RyaXAnKTtcbiAgfVxuXG4gIFN0cmluZy5wcm90b3R5cGUuc3RyaXAgPSBmdW5jdGlvbigpe1xuICAgIGlmKFN0cmluZy5wcm90b3R5cGUudHJpbSl7XG4gICAgICByZXR1cm4gdGhpcy50cmltKCk7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCcnKTtcbiAgICB9XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwic3RyaXBcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKFN0cmluZy5wcm90b3R5cGUuc3ViKXtcbiAgICB3YXJuKFN0cmluZywgJ3N1YicpO1xuICB9XG5cbiAgU3RyaW5nLnByb3RvdHlwZS5zdWIgPSBmdW5jdGlvbihhLGIpe1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2UoYSwgYik7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwic3ViXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihTdHJpbmcucHJvdG90eXBlLnRpdGxlaXplKXtcbiAgICB3YXJuKFN0cmluZywgJ3RpdGxlaXplJyk7XG4gIH1cblxuICBTdHJpbmcucHJvdG90eXBlLnRpdGxlaXplID0gZnVuY3Rpb24ob25seUZpcnN0TGV0dGVyKXtcbiAgICByZXR1cm4gdGhpcy5zcGxpdCgnICcpLm1hcChmdW5jdGlvbihzdHIpe1xuICAgICAgdmFyIHMgPSBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCk7XG4gICAgICBpZihvbmx5Rmlyc3RMZXR0ZXIgPT09IGZhbHNlKXtcbiAgICAgICAgcyArPSBzdHIuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgcyArPSBzdHIuc3Vic3RyKDEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHM7XG4gICAgfSkuam9pbignICcpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInRpdGxlaXplXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihTdHJpbmcucHJvdG90eXBlLnRvQm9vbCl7XG4gICAgd2FybihTdHJpbmcsICd0b0Jvb2wnKTtcbiAgfVxuXG4gIFN0cmluZy5wcm90b3R5cGUudG9Cb29sID0gZnVuY3Rpb24oKXtcbiAgICBpZih0aGlzID09PSAndHJ1ZScpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfWVsc2UgaWYodGhpcyA9PT0gJ2ZhbHNlJyl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInRvQm9vbFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoU3RyaW5nLnByb3RvdHlwZS51cGNhc2Upe1xuICAgIHdhcm4oU3RyaW5nLCAndXBjYXNlJyk7XG4gIH1cblxuICBTdHJpbmcucHJvdG90eXBlLnVwY2FzZSA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMudG9VcHBlckNhc2UoKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJ1cGNhc2VcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiJdfQ==
