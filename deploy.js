require('dotenv').config();
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const AdmZip = require('adm-zip');

const NETLIFY_API = "https://api.netlify.com/api/v1";
const AUTH_HEADER = { Authorization: `Bearer ${process.env.NETLIFY_AUTH_TOKEN}` };

// 🚀 1. Zip the Build Folder
const zipBuildFolder = () => {
    console.log("📦 Zipping build folder...");
    const zip = new AdmZip();
    zip.addLocalFolder(path.join(__dirname, "build"));
    const zipPath = path.join(__dirname, "build.zip");
    zip.writeZip(zipPath);
    return zipPath;
};

// 🚀 2. Deploy to Netlify
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
    } catch (error) {
        console.error("❌ Deployment Failed:", error.response?.data || error.message);
    }
};

// 🚀 Run Deployment
deployToNetlify();
