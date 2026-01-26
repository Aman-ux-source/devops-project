const express = require("express");
const app = express();

app.use(express.json());

// Browser + frontend safe
app.get("/status", (req, res) => {
  res.status(200).json({
    status: "UP",
    service: "backend",
    message: "Backend running successfully 🚀"
  });
});

// Internal health check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    message: "Internal health check OK"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on port ${PORT}`);
});
