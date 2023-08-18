
function checkSum(matrix, k) {
    const res = []
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].reduce((curr, next) => curr + next, 0) < k)
            res.push(matrix[i])
    }
    return res
}