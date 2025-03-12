const { } = require('mathjs');

// Function to solve a math problem
function solveMathProblem(problem) {
  // Parse the problem string into an expression tree
  const tree = math.parse(problem);
  // Evaluate the expression tree to get the solution
  return tree.eval();
}

// Example usage
console.log(solveMathProblem('2 + 3')); // Output: 5
