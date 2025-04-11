function sumSquareDifference(arr) {
  let total = arr.reduce((sum, num) => sum + Math.pow(num, 2), 0);
  let squareSum = arr.map(num => Math.pow(num, 2)).reduce((sum, sq) => sum + sq, 0);
  return total - squareSum;
}
