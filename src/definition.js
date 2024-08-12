class Definition {
    constructor({
                    type,
                    instruction,
                    properties,
                    required,
                    items,
                    model,
                    processingOrder,
                    systemPrompt,
                    req,
                    narrowFocus,
                    improvementProcess,
                    selectFields,
                    choices,
                    voters,
                    hashMap
                }) {
        this.type = type || '';
        this.instruction = instruction || '';
        this.properties = properties || {};
        this.required = required || [];
        this.items = items || null;
        this.model = model || '';
        this.processingOrder = processingOrder || [];
        this.systemPrompt = systemPrompt || null;
        this.req = req || null;
        this.narrowFocus = narrowFocus || null;
        this.improvementProcess = improvementProcess || false;
        this.selectFields = selectFields || [];
        this.choices = choices || null;
        this.voters = voters || false;
        this.hashMap = hashMap || null;
    }

    toMap() {
        const result = {};
        if (this.type) result.type = this.type;
        if (this.instruction) result.instruction = this.instruction;
        if (Object.keys(this.properties).length > 0) {
            const propertiesMap = {};
            for (const [key, value] of Object.entries(this.properties)) {
                propertiesMap[key] = value.toMap();
            }
            result.properties = propertiesMap;
        }
        if (this.required.length > 0) result.required = this.required;
        if (this.items) result.items = this.items.toMap();
        if (this.model) result.model = this.model;
        if (this.processingOrder.length > 0) result.processingOrder = this.processingOrder;
        return result;
    }
}

module.exports = Definition;
