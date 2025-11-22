class ConditionalBranch {
    constructor({ name, conditions, logic, then, priority }) {
        this.name = name || '';
        this.conditions = conditions || []; // Array of Condition instances
        this.logic = logic || null; // Definition instance
        this.then = then || null; // Definition instance
        this.priority = priority || 0;
    }

    toMap() {
        const result = {};
        if (this.name) result.name = this.name;
        if (this.conditions && this.conditions.length > 0) {
            result.conditions = this.conditions.map(c => c.toMap());
        }
        if (this.logic) result.logic = this.logic.toMap();
        if (this.then) result.then = this.then.toMap();
        if (this.priority) result.priority = this.priority;
        return result;
    }
}

module.exports = ConditionalBranch;
