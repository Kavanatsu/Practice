const twoDimensionalArray = [[1, 4, 5], [1, 3, 4], [2, 6]];

let oneDimensionalArray = [1,4,5,1,3,4,2,6];
for (let i = 0; i < twoDimensionalArray.length; i++) {
  for (let j = 0; j < twoDimensionalArray[i].length; j++) {
    oneDimensionalArray.push(twoDimensionalArray[i][j]);
  }
}

oneDimensionalArray.sort((a, b) => a - b);

console.log(oneDimensionalArray);