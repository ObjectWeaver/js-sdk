class ScoringDimension {
    constructor({ description, scale, type, weight }) {
        this.description = description || '';
        this.scale = scale || null; // ScoreScale instance
        this.type = type || ''; // ScoreType as string
        this.weight = weight || 0;
    }

    toMap() {
        const result = {};
        if (this.description) result.description = this.description;
        if (this.scale) result.scale = this.scale.toMap();
        if (this.type) result.type = this.type;
        if (this.weight !== undefined) result.weight = this.weight;
        return result;
    }
}

module.exports = ScoringDimension;
