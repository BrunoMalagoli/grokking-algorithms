/*
 * Dada una matriz, escribe un algoritmo para establecer ceros en la fila F y columna C si existe un
 * 0 en la celda F:C
 *
 * Ejemplo:
 *  Input: 2 1 3 0 2
 *         7 4 1 3 8
 *         4 0 1 2 1
 *         9 3 4 1 9
 *
 *  Output: 0 0 0 0 0
 *          7 0 1 0 8
 *          0 0 0 0 0
 *          9 0 4 0 9
 */

function mainFunc(matrix: number[][]) {
  const hasZeroesFirstCol = firstColHasZeroes(matrix);
  const hasZeroesFirstRow = firstRowHasZeroes(matrix);

  checkOtherZeroes(matrix);
  processCols(matrix);
  processRows(matrix);

  if (hasZeroesFirstRow) {
    setRowToZero(matrix, 0);
  }

  if (hasZeroesFirstCol) {
    setColToZero(matrix, 0);
  }
  return matrix;
}

function firstRowHasZeroes(matrix: number[][]): boolean {
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] == 0) {
      return true;
    }
  }
  return false;
}

function firstColHasZeroes(matrix: number[][]): boolean {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] == 0) {
      return true;
    }
  }
  return false;
}

function checkOtherZeroes(matrix: number[][]) {
  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      if (matrix[row][col] == 0) {
        matrix[0][col] = 0;
        matrix[row][0] = 0;
      }
    }
  }
}

function setRowToZero(matrix: number[][], row: number) {
  for (let i = 0; i < matrix[0].length; i++) {
    matrix[row][i] = 0;
  }
}

function setColToZero(matrix: number[][], col: number) {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][col] = 0;
  }
}

function processRows(matrix: number[][]) {
  for (let row = 1; row < matrix.length; row++) {
    if (matrix[row][0] == 0) {
      setRowToZero(matrix, row);
    }
  }
}

function processCols(matrix: number[][]) {
  for (let col = 1; col < matrix.length; col++) {
    if (matrix[0][col] == 0) {
      setColToZero(matrix, col);
    }
  }
}

//check solution

const matrixInput = [
  [2, 1, 3, 0, 2],
  [7, 4, 1, 3, 8],
  [4, 0, 1, 2, 1],
  [9, 3, 4, 1, 9],
];

console.log(mainFunc(matrixInput));
