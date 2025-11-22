class FieldMetadata {
    constructor({ tokensUsed, cost, modelUsed, choices }) {
        this.tokensUsed = tokensUsed || 0;
        this.cost = cost || 0;
        this.modelUsed = modelUsed || '';
        this.choices = choices || []; // Array of Choice instances
    }

    toMap() {
        const result = {};
        if (this.tokensUsed) result.tokensUsed = this.tokensUsed;
        if (this.cost !== undefined) result.cost = this.cost;
        if (this.modelUsed) result.modelUsed = this.modelUsed;
        if (this.choices && this.choices.length > 0) {
            result.choices = this.choices.map(c => c.toMap());
        }
        return result;
    }
}

module.exports = FieldMetadata;
