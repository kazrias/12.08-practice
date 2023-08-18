function largestSubmatrix(matrix) {
    // const n = matrix.length;
    // const m = matrix[0].length;
    // let maxArea = 0;
    // let result = null;

    // for (let i = 0; i < n; i++) {
    //     for (let j = 0; j < m; j++) {
    //         if (matrix[i][j] === 1) {
    //             let row = i;
    //             let col = j;
    //             while (row < n && matrix[row][j] === 1) row++;
    //             while (col < m && matrix[i][col] === 1) col++;
    //             const area = (row - i) * (col - j);
    //             if (area > maxArea) {
    //                 maxArea = area;
    //                 result = {i, j, row: row - 1, col: col - 1};
    //             }
    //         }
    //     }
    // }
    // return result;
    let len = matrix.len;
    let maxLen = 0;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if(matrix[i][j]){
                let rowIndex=i;
                let colIndex=j;
            }
        }
    }








}
const matrix = new Array(5).fill(0).map(() => new Array(5).fill(0));

// fill the matrix with random 0s and 1s
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        matrix[i][j] = Math.round(Math.random());
    }
}

// print the matrix
for (let i = 0; i < 5; i++) {
    console.log(matrix[i].join(' '));
}
console.log(largestSubmatrix(matrix));