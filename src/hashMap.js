class HashMap {
    constructor({ keyInstruction, fieldDefinition }) {
        this.keyInstruction = keyInstruction || '';
        this.fieldDefinition = fieldDefinition || null; // Definition instance
    }

    toMap() {
        const result = {};
        if (this.keyInstruction) result.keyInstruction = this.keyInstruction;
        if (this.fieldDefinition) result.fieldDefinition = this.fieldDefinition.toMap();
        return result;
    }
}

module.exports = HashMap;
