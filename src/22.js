// Node.js code for mathematical operations and problem-solving:

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }
  return a / b;
}

// Example usage:
const result = sum(5, 3);
console.log(result); // Output: 8

result = multiply(4.5, 2.5);
console.log(result); // Output: 11.25

result = subtract(9, 4);
console.log(result); // Output: 5

try {
  result = divide(6, 0);
} catch (error) {
  console.error(error.message); // Output: Cannot divide by zero.
}

result = multiply(3, 7);
console.log(result); // Output: 21
