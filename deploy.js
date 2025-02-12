// require('dotenv').config();
// const { exec } = require('child_process');

// const deployToNetlify = () => {
//     console.log("🚀 Deploying to Netlify...");

//     exec(`netlify deploy --prod --auth ${process.env.NETLIFY_AUTH_TOKEN} --dir=build`, (error, stdout, stderr) => {
//         if (error) {
//             console.error(`❌ Deployment Failed: ${error.message}`);
//             return;
//         }

//         if (stderr) {
//             console.error(`⚠ Warning: ${stderr}`);
//         }

//         // Extract Netlify URL from output
//         const match = stdout.match(/Website Live at:\s(https:\/\/[\w-]+\.netlify\.app)/);
//         if (match) {
//             console.log(`✅ Deployment Successful! Your site is live at: ${match[1]}`);
//         } else {
//             console.log("⚠ Deployment finished, but no URL found.");
//         }
//     });
// };

// // Ensure Netlify CLI is installed before running
// exec('netlify --version', (error, stdout, stderr) => {
//     if (error) {
//         console.error("❌ Netlify CLI not found! Please install it using: npm install -g netlify-cli");
//         return;
//     }
//     console.log(`📌 Netlify CLI version: ${stdout}`);
//     deployToNetlify();
// });


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
