const axios = require("axios");
const path = require("path");
const AdmZip = require("adm-zip");
const fs = require("fs");
const { exec } = require("child_process");

const apiUrl2 =
  "https://a7wg8ep9di.execute-api.us-east-1.amazonaws.com/default/generateurl";
const generatepresignedURLapi =
  "https://a7wg8ep9di.execute-api.us-east-1.amazonaws.com/prod/generatepresignedurl";
const filePath = path.join(__dirname, "build.zip");
const fileStream = fs.createReadStream(filePath);
const checkbuildurl =
  "https://a7wg8ep9di.execute-api.us-east-1.amazonaws.com/prod/checkBuild";
const removeobject =
  "https://a7wg8ep9di.execute-api.us-east-1.amazonaws.com/prod/removeobject";

const deleteObject = async () => {
  const response = await axios.get(removeobject);
};

const checkifBuildisUploaded = async () => {
  const response = await axios.get(checkbuildurl);
  if (response?.data?.exists === "true") {
    return true;
  }
  return false;
};

const waitForBuildUpload = async () => {
  console.log("Checking if build is uploaded...");
  let isUploaded = false;

  while (!isUploaded) {
    isUploaded = await checkifBuildisUploaded(); // Check build status
    if (!isUploaded) {
      console.log("Build is not uploaded yet. Retrying in 1 second...");
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second before checking again
    }
  }

  console.log("Build uploaded successfully!");
};

const zipBuildFolder = async () => {
  console.log("📦 Zipping build folder...");
  const zip = new AdmZip();
  zip.addLocalFolder(path.join(__dirname, "build"));
  const zipPath = path.join(__dirname, "build.zip");
  zip.writeZip(zipPath);
};

const generatepresignedURL = async () => {
  try {
    const response = await axios.get(generatepresignedURLapi);
    return response?.data?.presigned_url;
  } catch (error) {
    console.error("Error:", error);
  }
};

const uploadFile = async () => {
  const presigned_url = await generatepresignedURL();
  const curlCommand = `curl --request PUT --upload-file "build.zip" "${presigned_url}"`;

  exec(curlCommand, (error, stdout, stderr) => {
    if (error) {
    //   console.error(`Error executing curl: ${error.message}`);
      return;
    }
    if (stderr) {
    //   console.error(`Curl stderr: ${stderr}`);
      return;
    }
    // console.log(`Curl stdout: ${stdout}`);
  });
};

const deployToNetlify = async () => {
  try {
    console.log("Generating netlify URL .......");

    const response = await axios.get(apiUrl2);
    console.log(response.data);
  } catch (error) {
    console.error("Error", error);
  }
};

const main = async () => {
  await zipBuildFolder();
  await uploadFile();

  // Wait until build is uploaded before deploying to Netlify
  await waitForBuildUpload();
  await deployToNetlify();

  await deleteObject();
};

main();
