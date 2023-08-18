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
    let maxRowSize = Math.max(...matrix.map(item => item.length))
    for (let i = 0; i < maxRowSize; i++) {
        res = ''
        for (let j = 0; j < matrix.length; j++) {
            if (typeof matrix[j][i] === 'undefined')
                res += '.'
            else
                res += matrix[j][i]
        }
        if (res.includes(word)) return true
    }

    //bottom to top
    for (let i = 0; i < maxRowSize; i++) {
        res = ''
        for (let j = matrix.length - 1; j >= 0; j--) {
            if (typeof matrix[j][i] === 'undefined')
                res += '.'
            else
                res += matrix[j][i]
        }
        if (res.includes(word)) return true
    }
    return false
}

let matrix = [
    ['b', 'a', 'c'],
    ['a', 'x'],
    ['n', 'e', 'o'],
    ['f', 'k', 'n']
]

console.log(isWordIncluded(matrix, 'axe')); //true     
console.log(isWordIncluded(matrix, 'bac')); //true
console.log(isWordIncluded(matrix, 'no'));  //true
console.log(isWordIncluded(matrix, 'xa'));  //true