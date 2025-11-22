class Condition {
    constructor({ field, operator, numberValue, stringValue, boolValue, fieldPath }) {
        this.field = field || '';
        this.operator = operator || ''; // ComparisonOperator as string
        this.numberValue = numberValue;
        this.stringValue = stringValue;
        this.boolValue = boolValue;
        this.fieldPath = fieldPath || '';
    }

    toMap() {
        const result = {};
        if (this.field) result.field = this.field;
        if (this.operator) result.operator = this.operator;
        if (this.numberValue !== undefined && this.numberValue !== null) result.numberValue = this.numberValue;
        if (this.stringValue !== undefined && this.stringValue !== null) result.stringValue = this.stringValue;
        if (this.boolValue !== undefined && this.boolValue !== null) result.boolValue = this.boolValue;
        if (this.fieldPath) result.fieldPath = this.fieldPath;
        return result;
    }
}

module.exports = Condition;
