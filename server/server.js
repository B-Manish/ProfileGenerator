require("dotenv").config();
const express = require("express");
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const AdmZip = require("adm-zip");

const app = express();
const PORT = process.env.PORT || 5000;

const NETLIFY_API = "https://api.netlify.com/api/v1";
const AUTH_HEADER = { Authorization: `Bearer ${process.env.NETLIFY_AUTH_TOKEN}` };

// 📦 Function to Zip the Build Folder
const zipBuildFolder = () => {
    console.log("📦 Zipping build folder...");
    const zip = new AdmZip();
    zip.addLocalFolder(path.join(__dirname, "../build")); // Adjust path for Express
    const zipPath = path.join(__dirname, "../build.zip");
    zip.writeZip(zipPath);
    return zipPath;
};

// 🚀 Function to Deploy to Netlify
const deployToNetlify = async () => {
    try {
        const zipPath = zipBuildFolder();

        console.log("🚀 Creating a new Netlify site...");
        const { data: site } = await axios.post(`${NETLIFY_API}/sites`, {}, { headers: AUTH_HEADER });

        console.log(`✅ Site created: ${site.url}`);

        console.log("🔼 Uploading build.zip...");
        const zipStream = fs.createReadStream(zipPath);
        const { data: deploy } = await axios.post(`${NETLIFY_API}/sites/${site.id}/deploys`, zipStream, {
            headers: {
                ...AUTH_HEADER,
                "Content-Type": "application/zip",
            },
        });

        console.log(`🎉 Deployment successful! Your site is live at: ${site.url}`);
        return { success: true, url: site.url };
    } catch (error) {
        console.error("❌ Deployment Failed:", error.response?.data || error.message);
        return { success: false, error: error.response?.data || error.message };
    }
};

// 🚀 Express API Route for Deployment
app.get("/deploy", async (req, res) => {
    console.log("🚀 Deployment triggered via API...");
    const result = await deployToNetlify();
    
    if (result.success) {
        res.status(200).json({ message: "Deployment successful!", siteUrl: result.url });
    } else {
        res.status(500).json({ message: "Deployment failed!", error: result.error });
    }
});

// 🌍 Start Express Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
