const axios = require("axios");

const apiUrl1 = "https://a7wg8ep9di.execute-api.us-east-1.amazonaws.com/prod/profilegenerator/bsdk.zip";
const apiUrl2 = "https://a7wg8ep9di.execute-api.us-east-1.amazonaws.com/default/generateurl";

const deployToNetlify = async () => {
    try {
        console.log("Generating netlify url .......");
        const [response1, response2] = await Promise.all([
            axios.put(apiUrl1), 
            axios.get(apiUrl2)
        ]);

        console.log(response2.data);
    } catch (error) {
        console.error("Error fetching APIs:", error);
    }
};

deployToNetlify();







