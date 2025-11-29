// Image size constants (this code is based on go-openai)
const CreateImageSize256x256 = "256x256";
const CreateImageSize512x512 = "512x512";
const CreateImageSize1024x1024 = "1024x1024";

// dall-e-3 supported only
const CreateImageSize1792x1024 = "1792x1024";
const CreateImageSize1024x1792 = "1024x1792";

// Image - if you want the Url of the image use the DataType String otherwise use the DataType Byte
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
module.exports.CreateImageSize256x256 = CreateImageSize256x256;
module.exports.CreateImageSize512x512 = CreateImageSize512x512;
module.exports.CreateImageSize1024x1024 = CreateImageSize1024x1024;
module.exports.CreateImageSize1792x1024 = CreateImageSize1792x1024;
module.exports.CreateImageSize1024x1792 = CreateImageSize1024x1792;
