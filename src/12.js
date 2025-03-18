const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const mathProblems = [{
      question: 'What is the value of x in the equation 2x + 5 = 11?',
      answer: 'x = 3'
    },
    {
      question: 'What is the value of y in the equation y = mx + b, where m = 2 and b = 3?',
      answer: 'y = 6'
    }
  ];

  res.json(mathProblems);
});
