const axios = require("axios");
const path = require('path');
const AdmZip = require('adm-zip');
const fs = require("fs");
const FormData = require('form-data');

const apiUrl2 = "https://a7wg8ep9di.execute-api.us-east-1.amazonaws.com/default/generateurl";
const filePath = path.join(__dirname, 'build.zip');


const zipBuildFolder = async () => {
    console.log("📦 Zipping build folder...");
    const zip = new AdmZip();
    zip.addLocalFolder(path.join(__dirname, "build"));
    const zipPath = path.join(__dirname, "build.zip");
    zip.writeZip(zipPath);
    // return zipPath;
};


const uploadFile = async () => {
  try {
    const form = new FormData();

    const filePath = path.join(__dirname, 'build.zip');
    form.append('file', fs.createReadStream(filePath));

    const response = await axios.post('https://a7wg8ep9di.execute-api.us-east-1.amazonaws.com/prod/upload', form, {
      headers: {
        ...form.getHeaders() // Set the headers required by the form (multipart/form-data)
      }
    });

    console.log('File uploaded successfully:', response.data);
  } catch (error) {
    console.error('Error uploading the file:', error);
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
    await uploadFile();
    await deployToNetlify();
};

main();







