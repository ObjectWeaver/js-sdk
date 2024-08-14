const axios = require('axios');

class Client {
    constructor(password, baseURL) {
        this.password = password;
        this.baseURL = baseURL;
    }

    async sendHttpRequest(prompt, definition) {
        let url = this.baseURL;

        const requestBody = {
            prompt: prompt,
            definition: definition
        };

        try {
            const response = await axios.post(url+"/objectGen", requestBody, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.password}`
                }
            });
            return response;
        } catch (err) {
            throw new Error(`Error sending request: ${err.message}`);
        }
    }

    async sendRequest(prompt, definition) {
        try {
            const response = await this.sendHttpRequest(prompt, definition);
            if (response.status !== 200) {
                throw new Error(`Received non-200 response code: ${response.status}`);
            }

            return {
                data: response.data.data,
                usdCost: response.data.usdCost
            };
        } catch (err) {
            throw new Error(`Error processing response: ${err.message}`);
        }
    }
}

module.exports = Client;
