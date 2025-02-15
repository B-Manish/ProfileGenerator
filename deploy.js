const axios = require("axios");
const path = require('path');
const AdmZip = require('adm-zip');

const fs = require("fs");

const apiUrl2 = "https://a7wg8ep9di.execute-api.us-east-1.amazonaws.com/default/generateurl";
const filePath = path.join(__dirname, 'build.zip');
const fileStream = fs.createReadStream(filePath);
const presignedUrl = 'https://profilegenerator.s3.amazonaws.com/gg.zip?AWSAccessKeyId=ASIATCKATMPUIHFQW7YW&Signature=VibYGLm5GU5UbHGpmCTIIg7GsGs%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEBgaCXVzLWVhc3QtMSJGMEQCIGSyBJZS7Pg4Ie%2BrMD%2B42d3doxSdUQNXbIsWU%2FeXQWwCAiABe6V1y16F4agWsyJ3CiP1m1tWYkmtsVvlupPjVQinhSrwAghBEAAaDDIxMTEyNTc1NjkwNCIMkpRgf3HFnreMArgRKs0CGWa57q0PFDX%2Bkzi9L3w1SNC16wMPE70j%2FqhtyepJgQDPKSsMEQJ8zsP7rDCdAFVl0uka1ujm9voptReu050WmpUEEBfrrE%2FIgBUPqVMEfySAglDvurKCQk4zl2Be261tSqkU4a4styuRud5W8dd%2BKrMrfaZjtTlQH3mvT5rETgtjhU6NOocryBLCLNH53vOisc0%2F0%2BAa%2Bglb4Z9r71EHY4gM69uOcpR4H%2FpKA3CyuHAfbv%2FfTdp2NwLi9FtpbKxkgc7ZFXfEgTNx8x3mLu2p3jvrwVoVJ6RAOapVsgVgUWiiiiuUr3bxiPdSkA8TdmbajYXCfivXDwfJdAedFs8a0KqnzUfgiGbnJPgMqu0OMxuhy%2B9nL44HXYmPLNwZeJm2FdlYcoDV%2ByGCySuETIJGs9LDGQi%2FYfP6O%2FfEf%2BZUW%2BJsT9AX6ANB00pnnczwMK6Cwb0GOp8ByYY4VXz3hUassxIhrwUrQzRJu6dm3UIqp4DE3AiUVJPiAGQFi6oeiDTKaPBBNV3wNQ01TjLHbfr4jthEil26XhhN94ir2n4IEnUg5cSg5rQSzeDGn6MlTmM4fKMKOuy3kFFVEG3a4hurdwlxbQxuhg0qxruZ4s5hPHc0q%2FxiRySbnf5uDaIocRpnumu8rOwcGVhT9JZLE0zQbwSWdMGE&Expires=1739964271';


const zipBuildFolder = async () => {
    console.log("📦 Zipping build folder...");
    const zip = new AdmZip();
    zip.addLocalFolder(path.join(__dirname, "build"));
    const zipPath = path.join(__dirname, "build.zip");
    zip.writeZip(zipPath);
    // return zipPath;
};






// Read the file content
const uploadFile = async () => {
  try {
    const fileContent = fs.readFileSync(filePath); // Read the file into a buffer
    
    // Upload the file using axios
    const response = await axios.put(presignedUrl, fileContent, {
      headers: {
        'Content-Type': 'application/octet-stream', // You can set the file's content type (MIME type) here
      },
    });

    if (response.status === 200) {
      console.log('File uploaded successfully');
    } else {
      console.log('Failed to upload the file');
    }
  } catch (error) {
    console.error('Error uploading file:', error);
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







