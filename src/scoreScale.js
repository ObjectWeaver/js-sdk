class ScoreScale {
    constructor({ min, max }) {
        this.min = min || 0;
        this.max = max || 0;
    }

    toMap() {
        const result = {};
        if (this.min !== undefined) result.min = this.min;
        if (this.max !== undefined) result.max = this.max;
        return result;
    }
}

module.exports = ScoreScale;
