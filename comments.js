// Create web server
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

// Create a new comments array
var comments = [];

// Get all comments
app.get('/comments', function(req, res) {
  res.send(comments);
});

// Add a new comment
app.post('/comments', function(req, res) {
  comments.push(req.body);
  res.send('Comment added');
});

// Start the server
app.listen(3000, function() {
  console.log('Server is running on http://localhost:3000');
});