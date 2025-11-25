<div align="center">

# <span style="font-family: 'Roboto', sans-serif;">ObjectWeaver JavaScript SDK</span>

[![License](https://img.shields.io/badge/License-GNU-blue.svg)](https://github.com/ObjectWeaver/js-sdk/blob/main/LICENSE)
[![Documentation](https://img.shields.io/badge/Docs-objectweaver.dev-orange.svg)](https://objectweaver.dev/docs)

</div>

This module provides a client implementation for sending JSON definitions via HTTP POST requests. It is designed to be simple and easy to integrate into your existing Node.js projects.

## Installation

```bash
npm install objectweaver
```

To use this library you will need to import it in the below format:

```javascript
const {
    Client,
    Definition,
    RequestFormat,
    Focus,
    TextToSpeech,
    SpeechToText,
    Image,
    SendImage,
    DecisionPoint,
    ScoringCriteria,
    ModelConfig
} = require('objectweaver');
```

## Guide: Using JavaScript Client to Send JSON Definitions

This guide demonstrates how to create a JavaScript client that sends JSON definitions using HTTP POST requests.

### Step 1: Define the Client Class

The `Client` class manages the API connection.

```javascript
class Client {
    constructor(password, baseURL) {
        this.password = password;
        this.baseURL = baseURL;
    }
}
```

### Step 2: Initialize a New Client

Create a new client instance with your API password and base URL.

```javascript
// Initialize a new client with your credentials
const password = 'your-password';
const url = 'your-container-url';
const client = new Client(password, url);
```

### Step 3: Send Requests

Use the `sendRequest` method to send a POST request with a JSON-encoded definition.

```javascript
// SendRequest sends the prompt and definition, and returns the parsed response
async function sendRequest(prompt, definition) {
    const response = await client.sendRequest(prompt, definition);
    return response;
}
```

### Step 4: Example Usage

Demonstrate how to use the `Client` to send a definition.

```javascript
// Example usage
async function exampleUsage() {
    // Initialize a new client with your credentials
    const url = 'your-container-url';
    const password = 'your-password';
    const client = new Client(password, url);

    // Define a sample definition
    const definition = new Definition({
        type: 'object',
        instruction: 'Sample instruction for the definition.',
        properties: {
            property1: new Definition({
                type: 'string',
                instruction: 'Description of property1'
            }),
            property2: new Definition({
                type: 'number',
                instruction: 'Description of property2'
            })
        }
    });

    // Send the request
    try {
        const response = await client.sendRequest('Generate a sample object', definition);
        console.log('Response Data:', response.data);
        console.log('Cost in USD:', response.usdCost);
        console.log('Detailed Data:', response.detailedData);
    } catch (err) {
        console.error('Error sending request:', err.message);
    }
}
```

## Advanced Features

### Audio Processing

#### Text-to-Speech

```javascript
const tts = new TextToSpeech({
    model: 'tts-1',
    stringToAudio: 'Hello, world!',
    format: 'mp3',
    voice: 'alloy'
});

const definition = new Definition({
    type: 'string',
    instruction: 'Generate text for audio',
    textToSpeech: tts
});
```

#### Speech-to-Text

```javascript
const stt = new SpeechToText({
    model: 'whisper-1',
    audioToTranscribe: audioBuffer,
    language: 'en',
    format: 'json',
    toString: true
});

const definition = new Definition({
    type: 'string',
    instruction: 'Transcribe audio',
    speechToText: stt
});
```

### Image Generation

```javascript
const imageGen = new Image({
    model: 'dall-e-3',
    size: '1024x1024'
});

const definition = new Definition({
    type: 'string',
    instruction: 'Generate an image description',
    image: imageGen
});
```

### Decision Points and Conditional Logic

```javascript
const { DecisionPoint, ConditionalBranch, Condition } = require('objectweaver');

const condition = new Condition({
    field: 'score',
    operator: 'greater_than',
    numberValue: 0.8
});

const branch = new ConditionalBranch({
    name: 'high_score',
    conditions: [condition],
    then: new Definition({
        type: 'string',
        instruction: 'Generate detailed response'
    }),
    priority: 1
});

const decisionPoint = new DecisionPoint({
    name: 'quality_check',
    evaluationPrompt: 'Evaluate the quality',
    branches: [branch],
    strategy: 'first_match'
});

const definition = new Definition({
    type: 'object',
    instruction: 'Process with decision logic',
    decisionPoint: decisionPoint
});
```

### Scoring and Validation

```javascript
const { ScoringCriteria, ScoringDimension, ScoreScale, EpistemicValidation } = require('objectweaver');

const dimension = new ScoringDimension({
    description: 'Accuracy',
    scale: new ScoreScale({ min: 0, max: 100 }),
    type: 'numeric',
    weight: 0.5
});

const scoring = new ScoringCriteria({
    dimensions: { accuracy: dimension },
    evaluationModel: 'gpt-4',
    aggregationMethod: 'weighted_average'
});

const epistemic = new EpistemicValidation({
    active: true,
    judges: 3
});

const definition = new Definition({
    type: 'object',
    instruction: 'Generate with scoring',
    scoringCriteria: scoring,
    epistemic: epistemic
});
```

### Model Configuration

```javascript
const modelConfig = new ModelConfig({
    maxCompletionTokens: 1000,
    temperature: 0.7,
    topP: 0.9,
    presencePenalty: 0.0,
    frequencyPenalty: 0.0
});

const definition = new Definition({
    type: 'object',
    instruction: 'Generate with custom model config',
    modelConfig: modelConfig
});
```

### Streaming Requests

```javascript
// Stream generated objects in real-time
await client.streamRequest(
    'Generate streaming data',
    definition,
    (data) => {
        console.log('Received chunk:', data.data);
        console.log('Status:', data.status);
        console.log('Cost so far:', data.usdCost);
    },
    (error) => {
        console.error('Stream error:', error);
    },
    () => {
        console.log('Stream completed');
    }
);
```

### Custom Request Format

```javascript
const requestFormat = new RequestFormat({
    url: 'https://another-api-url.com',
    method: 'POST',
    headers: { 'Custom-Header': 'value' },
    body: { additional: 'data' },
    authorization: 'Bearer your-token',
    requireFields: ['field1', 'field2']
});

const definition = new Definition({
    type: 'object',
    instruction: 'Generate with custom request',
    req: requestFormat
});
```

### Focus for Targeted Generation

```javascript
const focus = new Focus({
    prompt: 'Extract specific fields',
    fields: ['name', 'age'],
    keepOriginal: true
});

const definition = new Definition({
    type: 'object',
    instruction: 'Generate focused data',
    narrowFocus: focus
});
```

## Response Structure

The SDK returns responses with the following structure:

```javascript
{
    data: { /* generated object */ },
    usdCost: 0.0023,
    detailedData: {
        fieldName: {
            value: { /* field value */ },
            metadata: {
                tokensUsed: 150,
                cost: 0.0015,
                modelUsed: 'gpt-4',
                choices: [
                    {
                        score: 95,
                        confidence: 0.92,
                        value: { /* choice value */ },
                        embedding: [0.1, 0.2, ...]
                    }
                ]
            }
        }
    }
}
```

## Conclusion

This guide provides a structured approach to creating a JavaScript client for sending JSON definitions via HTTP POST requests. Ensure to adapt the `Definition` struct and example usage to fit your specific API requirements and data structures.

For additional instructions on how to use this library and the connecting docker container, please visit [objectweaver.dev](https://objectweaver.dev).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements.


