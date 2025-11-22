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
