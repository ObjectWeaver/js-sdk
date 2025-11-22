class Focus {
    constructor({ prompt, fields, keepOriginal }) {
        this.prompt = prompt || '';
        this.fields = fields || [];
        this.keepOriginal = keepOriginal || false;
    }

    toMap() {
        const result = {};
        if (this.prompt) result.prompt = this.prompt;
        if (this.fields && this.fields.length > 0) result.fields = this.fields;
        if (this.keepOriginal !== undefined) result.keepOriginal = this.keepOriginal;
        return result;
    }
}

module.exports = Focus;
