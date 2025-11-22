const axios = require('axios');

class RequestFormat {
    constructor({ url, method, headers, body, authorization, requireFields }) {
        this.url = url || '';
        this.method = method || 'GET';
        this.headers = headers || {};
        this.body = body || {}; // google.protobuf.Struct
        this.authorization = authorization || '';
        this.requireFields = requireFields || [];
    }

    toMap() {
        const result = {};
        if (this.url) result.url = this.url;
        if (this.method) result.method = this.method;
        if (this.headers && Object.keys(this.headers).length > 0) result.headers = this.headers;
        if (this.body && Object.keys(this.body).length > 0) result.body = this.body;
        if (this.authorization) result.authorization = this.authorization;
        if (this.requireFields && this.requireFields.length > 0) result.requireFields = this.requireFields;
        return result;
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
