const axios = require("axios");
const path = require('path');
const AdmZip = require('adm-zip');
const fs = require("fs");
const FormData = require('form-data');
const { exec } = require('child_process');

const apiUrl2 = "https://a7wg8ep9di.execute-api.us-east-1.amazonaws.com/default/generateurl";
const generatepresignedURLapi="https://a7wg8ep9di.execute-api.us-east-1.amazonaws.com/prod/generatepresignedurl";
const filePath = path.join(__dirname, 'build.zip');
const fileStream = fs.createReadStream(filePath);


const zipBuildFolder = async () => {
    console.log("📦 Zipping build folder...");
    const zip = new AdmZip();
    zip.addLocalFolder(path.join(__dirname, "build"));
    const zipPath = path.join(__dirname, "build.zip");
    zip.writeZip(zipPath);
};

const generatepresignedURL = async () => {
    try {
        console.log("Generating presigned URL .......");
        const response = await axios.get(generatepresignedURLapi);
        console.log("response",response);
        return response?.data?.presigned_url;

    } catch (error) {
        console.error("Error fetching APIs:", error);
    }
};


const uploadFile = async () => {
  const presigned_url=await generatepresignedURL();
  const curlCommand = `curl --request PUT --upload-file "build.zip" "${presigned_url}"`; 

  exec(curlCommand, (error, stdout, stderr) => {
      if (error) {
          console.error(`Error executing curl: ${error.message}`);
          return;
      }
      if (stderr) {
          console.error(`Curl stderr: ${stderr}`);
          return;
      }
      console.log(`Curl stdout: ${stdout}`);
  });
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
    await uploadFile();
    await deployToNetlify();

    // await generatepresignedURL();
};

main();







