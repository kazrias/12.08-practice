function maxSumIndex(matrix) {
    let maxSum = 0;
    let maxIndex = 0;
    for (let i = 0; i < matrix.length; i++) {
        let sum = matrix[i].reduce((curr, next) => curr + next, 0)
        if (sum > maxSum) {
            maxSum = sum
            maxIndex = i;
        }
    }
    return maxIndex
}
