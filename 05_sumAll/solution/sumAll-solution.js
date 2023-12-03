const sumAll = function (min, max) {
  let sumedUp = 0;

  if (min < 0 || max < 0 || typeof min!= 'number' || typeof max!= 'number' ||
    !Number.isInteger(min) || !Number.isInteger(max)){
    return 'ERROR';
  }
  if (min < max) {
    for ( let i = max; i>=min; i--){
      sumedUp+=i;
    }
    
  }else if( min > max){
   for(let i = min; i >= max; i--){
    sumedUp += i;
  }
}


  return sumedUp;
};




module.exports = sumAll;
