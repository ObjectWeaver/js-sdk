class ScoringCriteria {
    constructor({ dimensions, evaluationModel, aggregationMethod }) {
        this.dimensions = dimensions || {}; // Map of ScoringDimension instances
        this.evaluationModel = evaluationModel || '';
        this.aggregationMethod = aggregationMethod || ''; // AggregationMethod as string
    }

    toMap() {
        const result = {};
        if (this.dimensions && Object.keys(this.dimensions).length > 0) {
            const dimensionsMap = {};
            for (const [key, value] of Object.entries(this.dimensions)) {
                dimensionsMap[key] = value.toMap();
            }
            result.dimensions = dimensionsMap;
        }
        if (this.evaluationModel) result.evaluationModel = this.evaluationModel;
        if (this.aggregationMethod) result.aggregationMethod = this.aggregationMethod;
        return result;
    }
}

module.exports = ScoringCriteria;
