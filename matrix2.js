function minsArray(matrix) {
    let res = []
    for (let i = 0; i < matrix.length; i++) {
        res.push(Math.min(...matrix[i]))
    }
    return res
}
