module.exports = function towelSort (matrix) {
  let arr = [];
  if (typeof matrix == 'undefined') return arr;
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 == 0) {
      for (item of matrix[i]) {
        arr.push(item);
      }
    } else {
      for (item of matrix[i].reverse()) {
        arr.push(item);
      }
    }
  }
  return arr;
}
