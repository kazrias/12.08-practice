function biggestLengthOfSquare(matrix = []) {
  let maxSize = 0;
  const len = matrix.length;
  let board = Array.from({ length: len }, () => Array.from({ length: len }).fill(0))
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (matrix[i][j] === 1) {
        if (i === 0 || j === 0) {
          board[i][j] = 1;
        } else {
          board[i][j] =
            Math.min(
              board[i - 1][j],
              board[i][j - 1],
              board[i - 1][j - 1]
            ) + 1;
        }

        if (board[i][j] > maxSize) {
          maxSize = board[i][j];
        }
      }
    }
  }

  return maxSize;
}