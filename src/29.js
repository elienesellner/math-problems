// Node.js code for generating a random number between 1 and 100
function getRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  return randomNumber;
}

console.log(getRandomNumber());
