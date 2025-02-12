require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allows React to communicate with Express
app.use(express.json()); // Parses incoming JSON requests

// 🏠 Default Route
app.get("/", (req, res) => {
    res.send("🚀 Express server is running!");
});

// Example API Route
app.get("/api/message", (req, res) => {
    res.json({ message: "Hello from Express!" });
});

// 🌍 Start Express Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
