require("dotenv").config();
const express = require("express");
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const AdmZip = require("adm-zip");
const cors = require("cors");



const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;



app.get("/", async (req, res) => {

    
    res.status(200).json({ message: "gg" });
});

// 🌍 Start Express Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
