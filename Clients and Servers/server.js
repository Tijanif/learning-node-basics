// Node module
const http = require('http');
const fs = require('fs');

// Creating the server
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header content type
  res.setHeader('Content-type', 'text/html');

  // Setting the content
  // res.write('<p>Hello, Diana</p>');
  // res.write('<p>Hello, Tijani</p>');

  // Sending HTML files
  fs.readFile('./views/index.html', (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      // Ending the respons
      res.end();
    }
  });
});

// Listening for request
server.listen(3000, 'localhost', () => {
  console.log('Listening for requests om port 3000');
});

// loop back ip address 127.0.01 localhost using our own computer.

// Port numbers represents a channel, gateway or port on ower computer - letting a certain bit of program to communicate with. Port numbers are like 'doors'
