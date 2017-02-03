function isObjectLike(value){
  return value != null && typeof value == 'object';
};

module.exports = isObjectLike;
