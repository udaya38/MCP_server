// Import the HTTP module
const http = require('http');

// Configuration
const hostname = '127.0.0.1';
const port = 3000;

// Create HTTP server
const server = http.createServer((req, res) => {
  // Log request URL
  console.log(`Request received: ${req.method} ${req.url}`);
  
  // Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Handle different routes
  if (req.url === '/') {
    res.end('Welcome to MCP Server! The server is running.\n');
  } else if (req.url === '/info') {
    res.end('MCP Server Information: Node.js HTTP Server\n');
  } else {
    res.statusCode = 404;
    res.end('404 Not Found\n');
  }
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
});
