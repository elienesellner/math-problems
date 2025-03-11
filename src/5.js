const math = require('mathjs');

function getRandomSolution() {
  const problem = math.randomInt(10);
  const answer = math.eval(`2 * ${problem}`);
  return `The problem is: ${problem} and the solution is ${answer}.`;
}

console.log(getRandomSolution());
