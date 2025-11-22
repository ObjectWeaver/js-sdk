# ObjectWeaver JS SDK - Quick Reference

## Installation
```bash
npm install object-generation-js
```

## Basic Usage
```javascript
const { Client, Definition } = require('object-generation-js');

const client = new Client('password', 'https://api-url.com');
const definition = new Definition({
    type: 'object',
    instruction: 'Your instruction',
    properties: { /* ... */ }
});

const response = await client.sendRequest('prompt', definition);
```

## All Available Classes

| Class | Purpose | File |
|-------|---------|------|
| `Client` | API client | `src/client.js` |
| `Definition` | Schema definition | `src/definition.js` |
| `RequestFormat` | Custom HTTP requests | `src/requestFormat.js` |
| `Focus` | Field targeting | `src/focus.js` |
| `TextToSpeech` | Text-to-audio conversion | `src/textToSpeech.js` |
| `SpeechToText` | Audio-to-text conversion | `src/speechToText.js` |
| `Image` | Image generation | `src/image.js` |
| `SendImage` | Send images | `src/sendImage.js` |
| `Choices` | Choice options | `src/choices.js` |
| `HashMap` | Dynamic key-value maps | `src/hashMap.js` |
| `Condition` | Conditional logic | `src/condition.js` |
| `ConditionalBranch` | Branch definition | `src/conditionalBranch.js` |
| `DecisionPoint` | Decision routing | `src/decisionPoint.js` |
| `ScoreScale` | Score range | `src/scoreScale.js` |
| `ScoringDimension` | Scoring dimension | `src/scoringDimension.js` |
| `ScoringCriteria` | Scoring system | `src/scoringCriteria.js` |
| `RecursiveLoop` | Iterative generation | `src/recursiveLoop.js` |
| `EpistemicValidation` | Multi-judge validation | `src/epistemicValidation.js` |
| `ModelConfig` | Model parameters | `src/modelConfig.js` |
| `Choice` | Single choice option | `src/choice.js` |
| `FieldMetadata` | Field metadata | `src/fieldMetadata.js` |
| `DetailedField` | Field with metadata | `src/detailedField.js` |
| `Response` | Standard response | `src/response.js` |
| `StreamingResponse` | Streaming response | `src/streamingResponse.js` |
| `RequestBody` | Request structure | `src/requestBody.js` |
| `Res` | Response utilities | `src/res.js` |

## Common Patterns

### Simple Object Generation
```javascript
const def = new Definition({
    type: 'object',
    instruction: 'Generate user data',
    properties: {
        name: new Definition({ type: 'string', instruction: 'Full name' }),
        age: new Definition({ type: 'number', instruction: 'Age in years' })
    }
});
```

### With Audio
```javascript
const def = new Definition({
    type: 'string',
    instruction: 'Generate greeting',
    textToSpeech: new TextToSpeech({
        model: 'tts-1',
        voice: 'alloy',
        format: 'mp3'
    })
});
```

### With Decision Logic
```javascript
const def = new Definition({
    type: 'object',
    instruction: 'Process input',
    decisionPoint: new DecisionPoint({
        name: 'router',
        branches: [
            new ConditionalBranch({
                name: 'branch1',
                conditions: [new Condition({ field: 'type', operator: 'equals', stringValue: 'A' })],
                then: new Definition({ /* ... */ })
            })
        ]
    })
});
```

### With Scoring
```javascript
const def = new Definition({
    type: 'object',
    instruction: 'Generate with quality check',
    scoringCriteria: new ScoringCriteria({
        dimensions: {
            quality: new ScoringDimension({
                description: 'Quality score',
                scale: new ScoreScale({ min: 1, max: 10 }),
                weight: 1.0
            })
        },
        evaluationModel: 'gpt-4'
    }),
    epistemic: new EpistemicValidation({ active: true, judges: 3 })
});
```

### Streaming
```javascript
await client.streamRequest(
    'prompt',
    definition,
    (data) => console.log(data),
    (error) => console.error(error),
    () => console.log('Done')
);
```

### With Model Config
```javascript
const def = new Definition({
    type: 'string',
    instruction: 'Generate text',
    modelConfig: new ModelConfig({
        temperature: 0.7,
        maxCompletionTokens: 1000,
        topP: 0.9
    })
});
```

## Response Structure

```javascript
{
    data: { /* your generated object */ },
    usdCost: 0.0023,
    detailedData: {
        fieldName: {
            value: { /* field value */ },
            metadata: {
                tokensUsed: 150,
                cost: 0.0015,
                modelUsed: 'gpt-4',
                choices: [...]
            }
        }
    }
}
```

## Data Types

Valid values for `type` field in Definition:
- `'object'`
- `'string'`
- `'number'`
- `'boolean'`
- `'array'`

## Comparison Operators

Valid values for Condition `operator`:
- `'equals'`
- `'not_equals'`
- `'greater_than'`
- `'less_than'`
- `'greater_than_or_equal'`
- `'less_than_or_equal'`
- `'contains'`
- `'not_contains'`

## All Classes Have `toMap()`

Every class includes a `toMap()` method for serialization:
```javascript
const definition = new Definition({ /* ... */ });
const serialized = definition.toMap();
```
