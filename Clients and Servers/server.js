// Node module
const http = require('http');

// Creating the server
const server = http.createServer((req, res) => {
  console.log('request made');
});

// Listening for request
server.listen(3000, 'localhost', () => {
  console.log('Listening for requests om port 3000');
});
