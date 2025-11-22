class SendImage {
    constructor({ imagesData }) {
        this.imagesData = imagesData || []; // Array of Buffer/Uint8Array for bytes
    }

    toMap() {
        const result = {};
        if (this.imagesData && this.imagesData.length > 0) {
            result.imagesData = this.imagesData;
        }
        return result;
    }
}

module.exports = SendImage;
