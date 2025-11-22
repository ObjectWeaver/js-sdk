class Response {
    constructor({ data, usdCost, detailedData }) {
        this.data = data || {}; // google.protobuf.Struct - map<string, any>
        this.usdCost = usdCost || 0;
        this.detailedData = detailedData || {}; // Map<string, DetailedField>
    }

    toMap() {
        const result = {};
        if (this.data && Object.keys(this.data).length > 0) result.data = this.data;
        if (this.usdCost !== undefined) result.usdCost = this.usdCost;
        if (this.detailedData && Object.keys(this.detailedData).length > 0) {
            const detailedDataMap = {};
            for (const [key, value] of Object.entries(this.detailedData)) {
                detailedDataMap[key] = value.toMap();
            }
            result.detailedData = detailedDataMap;
        }
        return result;
    }
}

module.exports = Response;
