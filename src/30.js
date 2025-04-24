const express = require('express');
const app = express();
app.use(express.json());

// Example route to handle GET requests
app.get('/math-problems', (req, res) => {
  const mathProblems = [
    { id: 1, title: 'Math Problem 1' },
    { id: 2, title: 'Math Problem 2' },
    // ... more mathematics problems ...
  ];

  res.json(mathProblems);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
