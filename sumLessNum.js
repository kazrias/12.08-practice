function rowToColumn(matrix) {
    let result = [];
    for (let i = 0; i < matrix[0].length; i++) {
        let row = matrix.map(e => e[i]);
        result.push(row);
    }
    return result;
}

function checkSum(matrix, k) {
    let res = [];
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].reduce((curr, next) => curr + next, 0) < k)
            res.push(matrix[i])
    }
    return res
}

function largestNestedMatrix(matrix, k) {
    let rowsChecked = checkSum(matrix, k)
    let rotatedMatrix = rowToColumn(rowsChecked);
    let columnsChecked = checkSum(rotatedMatrix, k)
    return rowToColumn(columnsChecked)
}
