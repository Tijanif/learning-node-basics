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

// loop back ip address 127.0.01 localhost using our own computer.

// Port numbers represents a channel, gateway or port on ower computer - letting a certain bit of program to communicate with. Port numbers are like 'doors'
