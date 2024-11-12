// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create comments array
const comments = [
  {
    username: 'Alice',
    comment: 'I love apples!'
  },
  {
    username: 'Bob',
    comment: 'I love oranges!'
  }
];

// Create GET route
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Start server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

