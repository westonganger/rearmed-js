function isBlank(x){
  var val = true;
  var length = x['length'];

  if(length || length == 0){
    val = length == 0;
  }else if(x == true || typeof x == 'number'){
    val = false;
  }else if(x){
    val = Object.keys(x).length == 0;
  }

  return val;
};

module.exports = isBlank;
