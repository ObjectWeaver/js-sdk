class Choice {
    constructor({ score, confidence, value, embedding }) {
        this.score = score || 0;
        this.confidence = confidence || 0;
        this.value = value || {}; // google.protobuf.Struct
        this.embedding = embedding || []; // Array of doubles
    }

    toMap() {
        const result = {};
        if (this.score) result.score = this.score;
        if (this.confidence !== undefined) result.confidence = this.confidence;
        if (this.value && Object.keys(this.value).length > 0) result.value = this.value;
        if (this.embedding && this.embedding.length > 0) result.embedding = this.embedding;
        return result;
    }
}

module.exports = Choice;
