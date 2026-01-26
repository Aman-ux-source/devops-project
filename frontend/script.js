const express = require("express");
const fetch = require("node-fetch"); // if using Node 18+, you can skip this import
const app = express();

// Original health route (inside backend container)
app.get("/api/health", (req, res) => {
  res.json({
    status: "UP",
    message: "Backend running successfully 🚀"
  });
});

// Proxy route for frontend browser
app.get("/status", async (req, res) => {
  try {
    // Call internal backend route from the container
    const response = await fetch("http://localhost:3000/api/health");
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ status: "DOWN", message: "Backend not reachable" });
  }
});

// Listen on port 3000
app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
