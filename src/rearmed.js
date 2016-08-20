String.prototype.empty = function(){
  this.length === 0;
};

String.prototype.blank = function(){
  this.length === 0;
};

String.prototype.present = function(){
  this.length !== 0;
};


Array.prototype.empty = function(){
  this.length === 0;
};

Array.prototype.not_empty = function(){
  this.length !== 0;
};

Array.prototype.any = function(cb){
  _.some(this, cb);
};

Array.prototype.collect = function(cb){
  this.map(cb);
};

Array.prototype.map = function(cb){
  _.map(this, cb);
};

Array.prototype.compact = function(cb){
  _.compact(this, cb);
};

Array.prototype.count = function(){
  this.length;
};

Array.prototype.delete = function(cb){
  if(typeof(cb) === 'function'){

  }else{

  }
};

Array.prototype.delete_at = function(cb){

};

Array.prototype.delete_if = function(cb){

};

Array.prototype.drop = function(cb){

};

Array.prototype.drop_while = function(cb){

};

Array.prototype.each = function(cb){
  this.forEach(cb);
};


