const matrix_transposition = function(matrix) {
  // Replace this code with your solution
  const numRow = matrix.length;
  const numCol = matrix[0].length;
  const finalValue = [];
  for (let i = 0; i < numCol; i++) {
    const row = [];
    for (let j = 0; j < numRow; j++) {
      row.push(matrix[j][i]);
    }
    finalValue.push(row);
  }
  
  return finalValue;
};

module.exports = matrix_transposition;