class Definition {
    constructor({
                    type,
                    instruction,
                    properties,
                    items,
                    model,
                    processingOrder,
                    systemPrompt,
                    req,
                    narrowFocus,
                    selectFields,
                    hashMap,
                    textToSpeech,
                    speechToText,
                    image,
                    sendImage,
                    stream,
                    overridePrompt,
                    priority,
                    decisionPoint,
                    scoringCriteria,
                    recursiveLoop,
                    epistemic,
                    modelConfig
                }) {
        this.type = type || '';
        this.instruction = instruction || '';
        this.properties = properties || {}; // Map<string, Definition>
        this.items = items || null; // Definition instance
        this.model = model || '';
        this.processingOrder = processingOrder || [];
        this.systemPrompt = systemPrompt || '';
        this.req = req || null; // RequestFormat instance
        this.narrowFocus = narrowFocus || null; // Focus instance
        this.selectFields = selectFields || [];
        this.hashMap = hashMap || null; // HashMap instance
        this.textToSpeech = textToSpeech || null; // TextToSpeech instance
        this.speechToText = speechToText || null; // SpeechToText instance
        this.image = image || null; // Image instance
        this.sendImage = sendImage || null; // SendImage instance
        this.stream = stream || false;
        this.overridePrompt = overridePrompt || '';
        this.priority = priority || 0;
        this.decisionPoint = decisionPoint || null; // DecisionPoint instance
        this.scoringCriteria = scoringCriteria || null; // ScoringCriteria instance
        this.recursiveLoop = recursiveLoop || null; // RecursiveLoop instance
        this.epistemic = epistemic || null; // EpistemicValidation instance
        this.modelConfig = modelConfig || null; // ModelConfig instance
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
        if (this.items) result.items = this.items.toMap();
        if (this.model) result.model = this.model;
        if (this.processingOrder.length > 0) result.processingOrder = this.processingOrder;
        if (this.systemPrompt) result.systemPrompt = this.systemPrompt;
        if (this.req) result.req = this.req.toMap();
        if (this.narrowFocus) result.narrowFocus = this.narrowFocus.toMap();
        if (this.selectFields.length > 0) result.selectFields = this.selectFields;
        if (this.hashMap) result.hashMap = this.hashMap.toMap();
        if (this.textToSpeech) result.textToSpeech = this.textToSpeech.toMap();
        if (this.speechToText) result.speechToText = this.speechToText.toMap();
        if (this.image) result.image = this.image.toMap();
        if (this.sendImage) result.sendImage = this.sendImage.toMap();
        if (this.stream !== undefined) result.stream = this.stream;
        if (this.overridePrompt) result.overridePrompt = this.overridePrompt;
        if (this.priority) result.priority = this.priority;
        if (this.decisionPoint) result.decisionPoint = this.decisionPoint.toMap();
        if (this.scoringCriteria) result.scoringCriteria = this.scoringCriteria.toMap();
        if (this.recursiveLoop) result.recursiveLoop = this.recursiveLoop.toMap();
        if (this.epistemic) result.epistemic = this.epistemic.toMap();
        if (this.modelConfig) result.modelConfig = this.modelConfig.toMap();
        return result;
    }
}

module.exports = Definition;
