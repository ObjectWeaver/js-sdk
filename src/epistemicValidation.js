class EpistemicValidation {
    constructor({ active, judges }) {
        this.active = active || false;
        this.judges = judges || 0;
    }

    toMap() {
        const result = {};
        if (this.active !== undefined) result.active = this.active;
        if (this.judges) result.judges = this.judges;
        return result;
    }
}

module.exports = EpistemicValidation;
