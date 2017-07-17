(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function warn(type, method, notPrototype){
  if(type && method){
    console.warn("Rearmed-js Overriding " + type + (notPrototype ? '.' : '.prototype.') + method, '. If this is a built-in browser method please report on Rearmed-js github issues.');
  }else{
    throw("incorrect number of arguments")
  }
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
require('./string/reverse');
require('./string/rstrip');
require('./string/startsWith');
require('./string/strip');
require('./string/sub');
require('./string/titleize');
require('./string/toBool');
require('./string/upcase');

},{"./string/capitalize":3,"./string/caseCmp":4,"./string/chars":5,"./string/downcase":6,"./string/empty":7,"./string/endsWith":8,"./string/excludes":9,"./string/gsub":10,"./string/includes":11,"./string/lstrip":12,"./string/reverse":13,"./string/rstrip":14,"./string/startsWith":15,"./string/strip":16,"./string/sub":17,"./string/titleize":18,"./string/toBool":19,"./string/upcase":20}],3:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../functions/warn');
  if(String.prototype.capitalize){
    warn('String', 'capitalize');
  }

  String.prototype.capitalize = function(){
    return this.charAt(0).toUpperCase() + this.substr(1);
  };

  Object.defineProperty(String.prototype, "capitalize", {enumerable: false});
}(this));

},{"./../functions/warn":1}],4:[function(require,module,exports){
(function(){
  "use strict";
  
  var warn = require('./../functions/warn');
  if(String.prototype.caseCmp){
    warn('String', 'caseCmp');
  }

  String.prototype.caseCmp = function(x){
    return this.toLowerCase() === x.toLowerCase();
  };

  Object.defineProperty(String.prototype, "caseCmp", {enumerable: false});
}(this));

},{"./../functions/warn":1}],5:[function(require,module,exports){
(function(){
  "use strict";
  
  var warn = require('./../functions/warn');
  if(String.prototype.chars){
    warn('String', 'chars');
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

},{"./../functions/warn":1}],6:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../functions/warn');
  if(String.prototype.downcase){
    warn('String', 'downcase');
  }

  String.prototype.downcase = function(){
    return this.toLowerCase();
  };

  Object.defineProperty(String.prototype, "downcase", {enumerable: false});
}(this));

},{"./../functions/warn":1}],7:[function(require,module,exports){
(function(){
  "use strict";

  if(!String.prototype.empty){
    String.prototype.empty = function(){
      return this.length === 0;
    };

    Object.defineProperty(String.prototype, "empty", {enumerable: false});
  }
}(this));

},{}],8:[function(require,module,exports){
(function(){
  "use strict";

  if(!String.prototype.endsWith){
    String.prototype.endsWith = function(x){
      return this.substr((this.length - x.length), this.length) === x;
    };

    Object.defineProperty(String.prototype, "endsWith", {enumerable: false});
  }
}(this));

},{}],9:[function(require,module,exports){
(function(){
  "use strict";
  
  var warn = require('./../functions/warn');
  if(String.prototype.excludes){
    warn('String', 'excludes');
  }

  String.prototype.excludes = function(x){
    return this.indexOf(x) === -1;
  }

  Object.defineProperty(String.prototype, "excludes", {enumerable: false});
}(this));

},{"./../functions/warn":1}],10:[function(require,module,exports){
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

},{"./../functions/warn":1}],11:[function(require,module,exports){
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

  var warn = require('./../functions/warn');
  if(String.prototype.lstrip){
    warn('String', 'lstrip');
  }

  String.prototype.lstrip = function(){
    return this.replace(/^\s+/g,'');
  };

  Object.defineProperty(String.prototype, "lstrip", {enumerable: false});
}(this));

},{"./../functions/warn":1}],13:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../functions/warn');
  if(String.prototype.reverse){
    warn('String', 'reverse');
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

},{"./../functions/warn":1}],14:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../functions/warn');
  if(String.prototype.rstrip){
    warn('String', 'rstrip');
  }

  String.prototype.rstrip = function(){
    return this.replace(/\s+$/g,'');
  };

  Object.defineProperty(String.prototype, "rstrip", {enumerable: false});
}(this));

},{"./../functions/warn":1}],15:[function(require,module,exports){
(function(){
  "use strict";

  if(!String.prototype.startsWith){
    String.prototype.startsWith = function(x){
      return this.substr(0, x.length) === x;
    };

    Object.defineProperty(String.prototype, "startsWith", {enumerable: false});
  }
}(this));

},{}],16:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../functions/warn');
  if(String.prototype.strip){
    warn('String', 'strip');
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

},{"./../functions/warn":1}],17:[function(require,module,exports){
(function(){
  "use strict";

  /*
  if(String.prototype.sub){
    console.warn("Rearmed-js Overriding String method: sub. The original sub method is useless and has been removed from the JS standard. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/sub');
  }
  */

  String.prototype.sub = function(a,b){
    return this.replace(a, b);
  };

  Object.defineProperty(String.prototype, "sub", {enumerable: false});
}(this));

},{}],18:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../functions/warn');
  if(String.prototype.titleize){
    warn('String', 'titleize');
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

},{"./../functions/warn":1}],19:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../functions/warn');
  if(String.prototype.toBool){
    warn('String', 'toBool');
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

},{"./../functions/warn":1}],20:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../functions/warn');
  if(String.prototype.upcase){
    warn('String', 'upcase');
  }

  String.prototype.upcase = function(){
    return this.toUpperCase();
  };

  Object.defineProperty(String.prototype, "upcase", {enumerable: false});
}(this));

},{"./../functions/warn":1}]},{},[2]);
