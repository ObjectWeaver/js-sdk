// Audio format constants
const TEXT = "text";
const SRT = "srt";
const VTT = "vtt";
const JSON = "json";
const VERBOSE_JSON = "verbose-json";

// TextToSpeech - the DataType to use with this type is Byte
class TextToSpeech {
    constructor({ model, stringToAudio, format, voice }) {
        this.model = model || '';
        this.stringToAudio = stringToAudio || '';
        this.format = format || '';
        this.voice = voice || '';
    }

    toMap() {
        const result = {};
        if (this.model) result.model = this.model;
        if (this.stringToAudio) result.stringToAudio = this.stringToAudio;
        if (this.format) result.format = this.format;
        if (this.voice) result.voice = this.voice;
        return result;
    }
}

module.exports = TextToSpeech;
module.exports.TEXT = TEXT;
module.exports.SRT = SRT;
module.exports.VTT = VTT;
module.exports.JSON = JSON;
module.exports.VERBOSE_JSON = VERBOSE_JSON;
