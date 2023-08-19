function largestNestedMatrix(matrix, k) {
    let rows = matrix.length;
    let cols = matrix.length;
    let max_size = 0;
    let result = [];

    for (let row_start = 0; row_start < rows; row_start++) {
        for (let col_start = 0; col_start < cols; col_start++) {
            for (let row_end = row_start; row_end < rows; row_end++) {
                for (let col_end = col_start; col_end < cols; col_end++) {
                    let valid = true;
                    for (let i = row_start; i <= row_end; i++) {
                        let row_sum = 0;
                        for (let j = col_start; j <= col_end; j++) {
                            row_sum += matrix[i][j];
                        }
                        if (row_sum > k) {
                            valid = false;
                            break;
                        }
                    }
                    for (let j = col_start; j <= col_end; j++) {
                        let col_sum = 0;
                        for (let i = row_start; i <= row_end; i++) {
                            col_sum += matrix[i][j];
                        }
                        if (col_sum > k) {
                            valid = false;
                            break;
                        }
                    }
                    if (valid) {
                        let size = (row_end - row_start + 1) * (col_end - col_start + 1);
                        if (size > max_size) {
                            max_size = size;
                            result = [];
                            for (let i = row_start; i <= row_end; i++) {
                                let row = [];
                                for (let j = col_start; j <= col_end; j++) {
                                    row.push(matrix[i][j]);
                                }
                                result.push(row);
                            }
                        }
                    }
                }
            }
        }
    }

    return result;
}

let matrix = [
    [1, 1, 1, 1, 1, 1],
    [4, 0, 4, 0, 4, 0],
    [3, 3, 3, 3, 3, 3],
    [0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1],
    [15, 15, 15, 15, 15, 15]]
let k = 19;
let result = largestNestedMatrix(matrix, k);
console.log(result);