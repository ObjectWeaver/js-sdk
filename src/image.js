class Image {
    constructor({ model, size }) {
        this.model = model || '';
        this.size = size || '';
    }

    toMap() {
        const result = {};
        if (this.model) result.model = this.model;
        if (this.size) result.size = this.size;
        return result;
    }
}

module.exports = Image;
