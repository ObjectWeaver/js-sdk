class ModelConfig {
    constructor({
        maxCompletionTokens,
        temperature,
        topP,
        n,
        stream,
        stop,
        presencePenalty,
        seed,
        frequencyPenalty,
        logitBias,
        logProbs,
        topLogProbs,
        user,
        store,
        reasoningEffort,
        metadata,
        chatTemplateKwargs
    }) {
        this.maxCompletionTokens = maxCompletionTokens || 0;
        this.temperature = temperature || 0;
        this.topP = topP || 0;
        this.n = n || 0;
        this.stream = stream || false;
        this.stop = stop || [];
        this.presencePenalty = presencePenalty || 0;
        this.seed = seed || 0;
        this.frequencyPenalty = frequencyPenalty || 0;
        this.logitBias = logitBias || {}; // Map<string, int32>
        this.logProbs = logProbs || false;
        this.topLogProbs = topLogProbs || 0;
        this.user = user || '';
        this.store = store || false;
        this.reasoningEffort = reasoningEffort || '';
        this.metadata = metadata || {}; // Map<string, string>
        this.chatTemplateKwargs = chatTemplateKwargs || {}; // google.protobuf.Struct
    }

    toMap() {
        const result = {};
        if (this.maxCompletionTokens) result.maxCompletionTokens = this.maxCompletionTokens;
        if (this.temperature !== undefined && this.temperature !== 0) result.temperature = this.temperature;
        if (this.topP !== undefined && this.topP !== 0) result.topP = this.topP;
        if (this.n) result.n = this.n;
        if (this.stream !== undefined) result.stream = this.stream;
        if (this.stop && this.stop.length > 0) result.stop = this.stop;
        if (this.presencePenalty !== undefined && this.presencePenalty !== 0) result.presencePenalty = this.presencePenalty;
        if (this.seed) result.seed = this.seed;
        if (this.frequencyPenalty !== undefined && this.frequencyPenalty !== 0) result.frequencyPenalty = this.frequencyPenalty;
        if (this.logitBias && Object.keys(this.logitBias).length > 0) result.logitBias = this.logitBias;
        if (this.logProbs !== undefined) result.logProbs = this.logProbs;
        if (this.topLogProbs) result.topLogProbs = this.topLogProbs;
        if (this.user) result.user = this.user;
        if (this.store !== undefined) result.store = this.store;
        if (this.reasoningEffort) result.reasoningEffort = this.reasoningEffort;
        if (this.metadata && Object.keys(this.metadata).length > 0) result.metadata = this.metadata;
        if (this.chatTemplateKwargs && Object.keys(this.chatTemplateKwargs).length > 0) result.chatTemplateKwargs = this.chatTemplateKwargs;
        return result;
    }
}

module.exports = ModelConfig;
