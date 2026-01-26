const express = require("express");
const app = express();

// Health check API (frontend will call this)
app.get("/status", (req, res) => {
  res.json({
    status: "UP",
    service: "backend",
    message: "Backend running successfully 🚀"
  });
});

// Optional internal API
app.get("/api/health", (req, res) => {
  res.json({
    status: "UP",
    message: "Internal health check OK"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on port ${PORT}`);
});
