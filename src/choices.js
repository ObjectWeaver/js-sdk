class Choices {
    constructor({ number, options }) {
        this.number = number || 0;
        this.options = options || [];
    }

    toMap() {
        const result = {};
        if (this.number) result.number = this.number;
        if (this.options && this.options.length > 0) result.options = this.options;
        return result;
    }
}

module.exports = Choices;
