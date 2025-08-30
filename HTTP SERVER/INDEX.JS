// Load the built-in HTTP module
const http = require("http");

// Create server
const server = http.createServer((req, res) => {
  // Set response header
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Handle routes manually
  if (req.url === "/") {
    res.end("Welcome to Home Page!........ try about contect anything else to 404");
  } else if (req.url === "/about") {
    res.end("This is the About Page.");
  } else if (req.url === "/contact") {
    res.end("Contact us at: contact@example.com");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Page Not Found");
  }
});

// Start server on port 3000
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
