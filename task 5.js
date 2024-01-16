function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
}

for (let i = 2; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}