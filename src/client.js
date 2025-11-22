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
                usdCost: response.data.usdCost,
                detailedData: response.data.detailedData || {}
            };
        } catch (err) {
            throw new Error(`Error processing response: ${err.message}`);
        }
    }

    async streamRequest(prompt, definition, onData, onError, onComplete) {
        let url = this.baseURL;

        const requestBody = {
            prompt: prompt,
            definition: definition
        };

        try {
            const response = await axios.post(url+"/streamObjectGen", requestBody, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.password}`
                },
                responseType: 'stream'
            });

            response.data.on('data', (chunk) => {
                try {
                    const data = JSON.parse(chunk.toString());
                    onData({
                        data: data.data,
                        usdCost: data.usdCost,
                        status: data.status,
                        detailedData: data.detailedData || {}
                    });
                } catch (err) {
                    onError(err);
                }
            });

            response.data.on('end', () => {
                if (onComplete) onComplete();
            });

            response.data.on('error', (err) => {
                onError(err);
            });

        } catch (err) {
            onError(err);
        }
    }
}

module.exports = Client;
