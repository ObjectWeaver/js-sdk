class RecursiveLoop {
    constructor({ maxIterations, selection, terminationPoint, feedbackPrompt, includePreviousAttempts }) {
        this.maxIterations = maxIterations || 0;
        this.selection = selection || ''; // SelectionStrategy as string
        this.terminationPoint = terminationPoint || null; // DecisionPoint instance
        this.feedbackPrompt = feedbackPrompt || '';
        this.includePreviousAttempts = includePreviousAttempts || false;
    }

    toMap() {
        const result = {};
        if (this.maxIterations) result.maxIterations = this.maxIterations;
        if (this.selection) result.selection = this.selection;
        if (this.terminationPoint) result.terminationPoint = this.terminationPoint.toMap();
        if (this.feedbackPrompt) result.feedbackPrompt = this.feedbackPrompt;
        if (this.includePreviousAttempts !== undefined) result.includePreviousAttempts = this.includePreviousAttempts;
        return result;
    }
}

module.exports = RecursiveLoop;
