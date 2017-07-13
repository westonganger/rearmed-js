(function(){
  "use strict";

// The rails implementation was used as a guide:
// https://github.com/rails/rails/blob/cab6ba4e1bf2abf6a5fb83f2f28e2a8482350bbd/activesupport/lib/active_support/core_ext/object/blank.rb
//

  var warn = require('./../core/warn');

// blank
  if(Object.prototype.blank){
    warn('Object', 'blank');
  }

  Object.prototype.blank = function(){
    if(this.empty){
      return this.empty();
    }
    return !this;
  };

  Object.defineProperty(Object.prototype, "blank", {enumerable: false});

// present
  if(Object.prototype.present){
    warn('Object', 'present');
  }

  Object.prototype.present = function(){
    return !this.blank();
  };

  Object.defineProperty(Object.prototype, "present", {enumerable: false});

// presence
  if(Object.prototype.presence){
    warn('Object', 'presence');
  }

  Object.prototype.presence = function(){
    return this.present() ? this : null;
  };

  Object.defineProperty(Object.prototype, "presence", {enumerable: false});
}(this));

