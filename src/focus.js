class Focus {
    constructor({ prompt, fields, keepOriginal }) {
        this.prompt = prompt;
        this.fields = fields || [];
        this.keepOriginal = keepOriginal || false;
    }
}

module.exports = Focus;
