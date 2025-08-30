// Import express
const express = require("express");

// Create an express app
const app = express();

// Define a port
const PORT = 3000;

// Middleware to parse JSON body (important for APIs)
app.use(express.json());

// Simple route
app.get("/", (req, res) => {
  res.send("Hello, Express server is running 🚀");
});

// Example route with params
app.get("/user/:id", (req, res) => {
  res.send(`User ID is ${req.params.id}`);
});

// Example POST route
app.post("/data", (req, res) => {
  res.json({
    message: "Data received successfully",
    data: req.body,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
