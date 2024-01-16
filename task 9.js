function bubbleSort(arr) {
  const len = arr.length;
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
      }
    }
  }

  return arr;
}

const numbers = [1, 2, 3, 6, 8, 1, 6, 3, 2, 1, 0, 4];
const strings = ['one', 'two', 'three'];

const sortedNumbers = bubbleSort(numbers);
const mergedArray = sortedNumbers.concat(strings);

console.log(mergedArray);