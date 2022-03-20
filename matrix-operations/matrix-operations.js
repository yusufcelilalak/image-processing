// test matrices
let firstMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let secondMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(sumMatrix(firstMatrix, secondMatrix));
console.log(subtractMatrix(firstMatrix, secondMatrix));
console.log(multiplyMatrix(firstMatrix, secondMatrix));

function sumMatrix(matrixA, matrixB) {
  let resultArray = [];

  if (
    matrixA.length != matrixB.length ||
    matrixA[0].length != matrixB[0].length
  ) {
    console.log(
      "Invalid operation! Dimensions of the matrices should be same."
    );
    return 0;
  }

  for (let i = 0; i < matrixA.length; i++) {
    resultArray[i] = [];
    for (let j = 0; j < matrixA.length; j++) {
      resultArray[i][j] = matrixA[i][j] + matrixB[i][j];
    }
  }
  return resultArray;
}

function subtractMatrix(matrixA, matrixB) {
  let resultArray = [];

  if (
    matrixA.length != matrixB.length ||
    matrixA[0].length != matrixB[0].length
  ) {
    console.log(
      "Invalid operation! Dimensions of the matrices should be same."
    );
    return 0;
  }

  for (let i = 0; i < matrixA.length; i++) {
    resultArray[i] = [];
    for (let j = 0; j < matrixA.length; j++) {
      resultArray[i][j] = matrixA[i][j] - matrixB[i][j];
    }
  }
  return resultArray;
}

function multiplyMatrix(matrixA, matrixB) {
  let resultArray = [];

  if (matrixA[0].length != matrixB.length) {
    console.log(
      "Invalid operation! Number of columns in the first matrix must be equal to the number of rows in the second matrix."
    );
    return 0;
  }

  for (let i = 0; i < matrixA.length; i++) {
    resultArray[i] = [];
    for (let j = 0; j < matrixB[0].length; j++) {
      resultArray[i][j] = 0;
      for (let k = 0; k < matrixB.length; k++) {
        resultArray[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }
  return resultArray;
}
