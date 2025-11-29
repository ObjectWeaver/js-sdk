// Audio format constants
const TEXT = "text";
const SRT = "srt";
const VTT = "vtt";
const JSON = "json";
const VERBOSE_JSON = "verbose-json";

// SpeechToText - the DataType to use with this type is String
class SpeechToText {
    constructor({ model, audioToTranscribe, language, format, toString, toCaptions, chunkingStrategy, extraBody }) {
        this.model = model || '';
        this.audioToTranscribe = audioToTranscribe || null; // Buffer/Uint8Array for bytes
        this.language = language || ''; // must be in the format of ISO-639-1, defaults to en (English)
        this.format = format || '';
        this.toString = toString || false;
        this.toCaptions = toCaptions || false;
        this.chunkingStrategy = chunkingStrategy || '';
        this.extraBody = extraBody || null; // Object for additional fields
    }

    toMap() {
        const result = {};
        if (this.model) result.model = this.model;
        if (this.audioToTranscribe) result.audioToTranscribe = this.audioToTranscribe;
        if (this.language) result.language = this.language;
        if (this.format) result.format = this.format;
        if (this.toString !== undefined) result.toString = this.toString;
        if (this.toCaptions !== undefined) result.toCaptions = this.toCaptions;
        if (this.chunkingStrategy) result.chunkingStrategy = this.chunkingStrategy;
        if (this.extraBody) result.extraBody = this.extraBody;
        return result;
    }
}

module.exports = SpeechToText;
module.exports.TEXT = TEXT;
module.exports.SRT = SRT;
module.exports.VTT = VTT;
module.exports.JSON = JSON;
module.exports.VERBOSE_JSON = VERBOSE_JSON;
