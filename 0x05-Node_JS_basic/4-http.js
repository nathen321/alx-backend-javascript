const http = require('http');

// Create a basic HTTP server
const app  = http.createServer((req, res) => {
  // Handle requests
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello ALX!');
});

// Start listening on port 3000
app.listen(1245, () => {
  console.log('...');
});