// https://dictionaryapi.com/account/example?key=67cae3d6-c52e-40f4-b235-17cd1573d0aa
// pass: Password1
// required https module
const https = require('https');

function getDef(term){
    try{
        // request data
        const request = https.get(
            `https://dictionaryapi.com/api/v3/references/collegiate/json/${term}?key=67cae3d6-c52e-40f4-b235-17cd1573d0aa`,
            (response) => {
                let body = "";
                // read the data
                response.on("data", (data) => {
                    body += data.toString();
                });
                response.on("end", () => {
                    // Parse the data
                    const definition = JSON.parse(body);
                    // Print the data
                    console.log(definition[0].shortdef);
                });
            }
        );
        request.on("error", (error) => console.error(error.message));
    }
    catch (error){
        console.error(error.message);
    }
};
const query = process.argv.slice(2);
// process.argv takes input from the terminal
query.forEach(getDef);