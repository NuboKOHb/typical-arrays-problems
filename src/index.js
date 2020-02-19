
exports.min = function min (array = []) {
  if (array.length == 0 || array == undefined) return 0;
  return array.sort((a,b)=>(a-b))[0];
}

exports.max = function max (array = []) {
  if (array.length == 0 || array == undefined) return 0;
  return (!!array)?array.sort((a,b)=>(b-a))[0]:0;
}

exports.avg = function avg (array = []) {
  if (array.length == 0 || array == undefined) return 0;
  let sum = 0;
  array.forEach(item=>sum+=item);
  return sum/array.length;
}
