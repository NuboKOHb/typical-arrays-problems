
exports.min = function min (array) {
  return array.sort((a,b)=>(a-b))[0];
}

exports.max = function max (array) {
  return array.sort((a,b)=>(b-a))[0];
}

exports.avg = function avg (array) {
  let result = arr.reduce((sum, current) => sum + current, 0);
  result /=array.length;
  return result;
}
