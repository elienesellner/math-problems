const getRandomMathProblem = () => {
 let num1 = Math.floor(Math.random() * 10) + 1;
 let num2 = Math.floor(Math.random() * 10) + 1;

 return `${num1} x ${num2}`;
};
