function fibonacci(n) {
  let sequence = [0, 1];

  for (let i = 2; i <= n; i++) {
    let nextNumber = sequence[i - 1] + sequence[i - 2];
    if (nextNumber <= n) {
      sequence.push(nextNumber);
    } else {
      break;
    }
  }

  return sequence;
}

let fibSeries = fibonacci(200);

for (let number of fibSeries) {
  console.log(number);
}