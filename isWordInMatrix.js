function isWordIncluded(matrix, word) {
    //left to right
    let res = '';
    for (let i = 0; i < matrix.length; i++) {
        res = ''
        for (let j = 0; j < matrix[i].length; j++)
            res += matrix[i][j]
        if (res.includes(word)) return true
    }

    //right to left
    for (let i = 0; i < matrix.length; i++) {
        res = ''
        for (let j = matrix[i].length - 1; j >= 0; j--)
            res += matrix[i][j]
        if (res.includes(word)) return true
    }

    //top to bottom
    for (let i = 0; i < matrix[0].length; i++) {
        res = ''
        for (let j = 0; j < matrix.length; j++) {
            res += matrix[j][i]
        }
        if (res.includes(word)) return true
    }

    //bottom to top
    for (let i = 0; i < matrix[0].length; i++) {
        res = ''
        for (let j = matrix.length - 1; j >= 0; j--) {
            res += matrix[j][i]
        }
        if (res.includes(word)) return true
    }
    return false
}
