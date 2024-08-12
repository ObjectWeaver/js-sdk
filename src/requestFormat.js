const axios = require('axios');

class RequestFormat {
    constructor({ url, method, headers, body, authorization, requireFields }) {
        this.url = url;
        this.method = method || 'GET';
        this.headers = headers || {};
        this.body = body || {};
        this.authorization = authorization || '';
        this.requireFields = requireFields || [];
    }

    async executeRequest(currentGen) {
        // Merge currentGen into the existing body
        this.body = { ...this.body, ...currentGen };

        try {
            const response = await axios({
                url: this.url,
                method: this.method,
                headers: {
                    ...this.headers,
                    Authorization: this.authorization
                },
                data: this.body
            });

            return response;
        } catch (err) {
            throw new Error(`Failed to execute request: ${err.message}`);
        }
    }
}

module.exports = RequestFormat;
