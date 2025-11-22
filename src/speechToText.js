class SpeechToText {
    constructor({ model, audioToTranscribe, language, format, toString, toCaptions }) {
        this.model = model || '';
        this.audioToTranscribe = audioToTranscribe || null; // Buffer/Uint8Array for bytes
        this.language = language || '';
        this.format = format || '';
        this.toString = toString || false;
        this.toCaptions = toCaptions || false;
    }

    toMap() {
        const result = {};
        if (this.model) result.model = this.model;
        if (this.audioToTranscribe) result.audioToTranscribe = this.audioToTranscribe;
        if (this.language) result.language = this.language;
        if (this.format) result.format = this.format;
        if (this.toString !== undefined) result.toString = this.toString;
        if (this.toCaptions !== undefined) result.toCaptions = this.toCaptions;
        return result;
    }
}

module.exports = SpeechToText;
