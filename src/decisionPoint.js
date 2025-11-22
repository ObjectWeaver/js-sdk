class DecisionPoint {
    constructor({ name, evaluationPrompt, branches, strategy }) {
        this.name = name || '';
        this.evaluationPrompt = evaluationPrompt || '';
        this.branches = branches || []; // Array of ConditionalBranch instances
        this.strategy = strategy || ''; // RoutingStrategy as string
    }

    toMap() {
        const result = {};
        if (this.name) result.name = this.name;
        if (this.evaluationPrompt) result.evaluationPrompt = this.evaluationPrompt;
        if (this.branches && this.branches.length > 0) {
            result.branches = this.branches.map(b => b.toMap());
        }
        if (this.strategy) result.strategy = this.strategy;
        return result;
    }
}

module.exports = DecisionPoint;
