class DetailedField {
    constructor({ value, metadata }) {
        this.value = value || {}; // google.protobuf.Struct
        this.metadata = metadata || null; // FieldMetadata instance
    }

    toMap() {
        const result = {};
        if (this.value && Object.keys(this.value).length > 0) result.value = this.value;
        if (this.metadata) result.metadata = this.metadata.toMap();
        return result;
    }
}

module.exports = DetailedField;
