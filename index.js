const axios = require('axios');

exports.checkHeaderLength = async (req, res) => {
    try {
        // Capture the domain variable
        let url = req.body.url;

        console.log('URL: ', url);
        if (!url) {
          res.status(400).send('URL is missing');
          return;
        }

        // Make a GET request to the URL
        const response = await axios.get(url);

        // Get the length of the header from the response
        const headerLength = Buffer.byteLength(JSON.stringify(response.headers));
        const headerLengthKilobytes = headerLength / 1024;

        let data = {
            url: url,
            headerLength: headerLength,
            headerLengthKilobytes: headerLengthKilobytes.toFixed(2), // Limit to 2 decimal places
            timestamp: new Date().toISOString() // Add timestamp
        };

        res.status(200).send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
};