function findPrimeNumbers(limit) {
  const numbers = [];
  let num = 2;

  while (numbers.length < limit) {
    if (isPrime(num)) {
      numbers.push(num);
    }
    num++;
  }

  return numbers;
}

function isPrime(number) {
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
