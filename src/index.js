
exports.min = function min (array) {
  if(!array){
    return 0;
  }
    if(array.length > 0){
      return Math.min.apply(null, array);
    }
    else
      return 0;
}

exports.max = function max (array) {
  if(!array){
    return 0;
  }
    if(array.length > 0){
      return Math.max.apply(null, array);
    }
    else
      return 0;
}

exports.avg = function avg (array) {
  let i = 0;
  if(!array){
    return 0;
  }
  if(array.length > 0){
    for(i = 1; i < array.length; i++){
      array[0] += array[i];
    }
    return array[0]/i;
  }
  else
    return 0;
}
