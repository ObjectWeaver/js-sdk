// SendImage - When sending multiple images take into account the model you have selected.
// Such that Gemini Models support multiple images whereas the Claude models only support one image at a time
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
