const express = require("express");
const app = express();

// Allow JSON responses
app.use(express.json());

// Health API (frontend + browser-safe)
app.get("/status", (req, res) => {
  res.status(200).json({
    status: "UP",
    service: "backend",
    message: "Backend running successfully 🚀"
  });
});

// Internal API (optional, for Kubernetes checks)
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    message: "Internal health check OK"
  });
});

// IMPORTANT: listen on all interfaces
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Backend running on port ${PORT}`);
});
