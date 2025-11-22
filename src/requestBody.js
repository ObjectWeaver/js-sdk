class RequestBody {
    constructor({ prompt, definition }) {
        this.prompt = prompt || '';
        this.definition = definition || null; // Definition instance
    }

    toMap() {
        const result = {};
        if (this.prompt) result.prompt = this.prompt;
        if (this.definition) result.definition = this.definition.toMap();
        return result;
    }
}

module.exports = RequestBody;
