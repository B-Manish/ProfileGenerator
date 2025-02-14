const axios = require("axios");
const path = require('path');
const AdmZip = require('adm-zip');

const fs = require("fs");
const FormData = require('form-data');

const apiUrl1 = "https://a7wg8ep9di.execute-api.us-east-1.amazonaws.com/prod/profilegenerator/build.zip";
const apiUrl2 = "https://a7wg8ep9di.execute-api.us-east-1.amazonaws.com/default/generateurl";
const zipFilePath = path.join(__dirname, "build.zip");


const zipBuildFolder = async () => {
    console.log("📦 Zipping build folder...");
    const zip = new AdmZip();
    zip.addLocalFolder(path.join(__dirname, "build"));
    const zipPath = path.join(__dirname, "build.zip");
    zip.writeZip(zipPath);
    // return zipPath;
};

// Function to upload the zipped file to the first API
const uploadZipFile = async (zipFilePath) => {
    const formData = new FormData();
    formData.append('file', fs.createReadStream(zipFilePath)); // Append the file to FormData

    try {
        console.log("Uploading zipped file to API 1...");
        const response1 = await axios.put(apiUrl1, formData, {
            headers: {
                ...formData.getHeaders(), // Set the headers for multipart/form-data
            }
        });
        console.log("API 1 Response:", response1.data);
        return response1.data; // Return the result if needed later
    } catch (error) {
        console.error("Error uploading file:", error);
    }
};


const deployToNetlify = async () => {
    try {
        console.log("Generating netlify URL .......");

        const response = await axios.get(apiUrl2);
        console.log(response.data);

    } catch (error) {
        console.error("Error fetching APIs:", error);
    }
};


const main = async () => {
    await zipBuildFolder();
    await uploadZipFile(zipFilePath);
    await deployToNetlify();
};

main();







