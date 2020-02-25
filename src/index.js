
exports.min = function min (array) {
  if (array !== undefined) {
    if (array.length > 0) {
      let m = array[0];
      array.forEach(element => {
        if (element < m) {
          m = element;
        }
      });
      return m;
    } else {
      return 0;
    }
  }
  return 0;
}

exports.max = function max (array) {
  if (array !== undefined) {
    if (array.length > 0) {
      let ma = array[0];
      array.forEach(element => {
        if (element > ma) {
          ma = element;
        }
      });
      return ma;
    } else {
      return 0;
    }
  }
  return 0;
}

exports.avg = function avg (array) {
  if (array !== undefined){
    if (array.length > 0) {
      let sum = 0;
      array.forEach(element => {
        sum += element;
      });
      return (sum / array.length)
    } else {
      return 0;
    }
  }
  return 0;
}