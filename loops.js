 // 3x3 Arrays for testing
const testMatrices = [
    [   // ascending numbers
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
    ],
    [   // all even numbers
        [-2, 4, -6],
        [8, -10, 12],
        [14, -16, 18]
    ],
    [   // all odd numbers
        [1, 3, 5],
        [-7, -9, 11],
        [13, 15, -17]
    ],
    [   // digits of pi pattern
        [3, -1, 4],
        [1, 5, -9],
        [2, 6, -5]
    ],
    [   // includes undefined values
        [0, 1, undefined],
        [13, 17, 19],
        [5, undefined, 8]
    ],
    [   // includes null values
        [0, 1, null],
        [13, null, 7],
        [9, 2, null]
    ],
    [   // identity matrix
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
    ],
    [   // mixed large integers
        [500, 100, 200],
        [300, 1000, 400],
        [700, 200, 600]
    ],
    [   // negative to positive range
        [-3, -2, -1],
        [0, 1, 2],
        [3, 4, 5]
    ],
    [   // uniform values
        [10, 10, 10],
        [10, 10, 10],
        [10, 10, 10]
    ]
];




// Example completed function
function sumMatrix(matrix) {
    let total = 0;
    for (const row of matrix) {
        for (const val of row) {
            total += val;
        }
    }
    console.log("The sum total is:", total);
    return total;
}

function rowSum(matrix) {
    let result = [];
    for (let row of matrix) {
        let sum = 0;
        for (let val of row) {
            sum += val;
        }
        result.push(sum);
    }
    return result;
}

function colSum(matrix) {
    let result = [];
    if (matrix.length === 0) return result;
    let numCols = matrix[0].length;
    for (let col = 0; col < numCols; col++) {
        let sum = 0;
        for (let row of matrix) {
            sum += row[col];
        }
        result.push(sum);
    }
    return result;
}

function countZeros(matrix) {
    let count = 0;
    for (let row of matrix) {
        for (let val of row) {
            if (val === 0) count++;
        }
    }   return count;   
}

function minValue2D(matrix) {
    let min = Infinity;
    let found = false;
    for (let row of matrix) {
        for (let val of row) {
            if (typeof val === 'number' && !isNaN(val)) {
                if (val < min) {
                    min = val;
                }
                found = true;
            }
        }
    }
    return found ? min : undefined;
}

function maxValue2D(matrix) {
    let max = -Infinity;
    let found = false;
    for (let row of matrix) {
        for (let val of row) {
            if (typeof val === 'number' && !isNaN(val)) {
                if (val > max) {
                    max = val;
                }
                found = true;
            }
        }
    }
    return found ? max : undefined;
}

function doubleMatrix(matrix) {
    let result = [];
    for (const row of matrix) {
        let newRow = [];
        for (const val of row) {
            newRow.push(val * 2);
        }
        result.push(newRow);
    }
    return result;
}


function positiveMap(matrix) {
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        let newRow = [];
        for (let j = 0; j < matrix[i].length; j++) {
            let val = matrix[i][j];
            if (typeof val === 'number' && !isNaN(val) && val > 0) {
                newRow.push(true);
            } else {
                newRow.push(false);
            }
        }
        result.push(newRow);
    }
    return result;
}

function diagonalSum(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        let val = matrix[i][i];
        if (typeof val === 'number' && !isNaN(val)) {
            sum += val;
        }
    }
    return sum;
}

function transposeMatrix(matrix) {
    if (matrix.length === 0) return [];
    let numRows = matrix.length;
    let numCols = matrix[0].length;
    let result = [];
    for (let j = 0; j < numCols; j++) {
        let newRow = [];
        for (let i = 0; i < numRows; i++) {
            newRow.push(matrix[i][j]);
        }
        result.push(newRow);
    }
    return result;
}
