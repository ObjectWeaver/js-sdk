# object-generation-js

`object-generation-js` is a Node.js package that provides a client for interacting with APIs using JSON schema definitions. It includes utilities to create requests and process responses, particularly for scenarios involving structured JSON data.


For additional instructions for how to use this library and the connecting docker container please visit https://go-multiple.com/console

## Features

- Send HTTP requests with JSON schema-based payloads.
- Define complex JSON structures using `Definition`.
- Support for various HTTP methods and custom headers.
- Easily handle responses with a predefined structure.

## Installation

You can install the package using npm:

```bash
npm install object-generation-js
```

## Quick Start

### Importing the Module

First, import the required classes from the `json-schema-client` package.

```javascript
const { Client, Definition, RequestFormat, Focus, Res } = require('json-schema-client');
```

### Creating a Client Instance

Create a new client instance with your API key and base URL.

```javascript
const apiKey = 'your-api-key';
const baseURL = 'https://your-api-url.com';

const client = new Client(apiKey, baseURL);
```

### Defining a JSON Schema

Define the JSON schema that will be used to structure the request payload.

```javascript
const definition = new Definition({
    type: 'object',
    instruction: 'Generate a response based on the prompt',
    properties: {
        name: { type: 'string' },
        age: { type: 'number' }
    },
    required: ['name']
});
```

### Sending a Request

Use the `sendRequest` method of the `Client` to send the request with a prompt and the defined schema.

```javascript
const prompt = 'Please generate a profile';
client.sendRequest(prompt, definition)
    .then(response => {
        console.log('Response Data:', response.data);
        console.log('Cost in USD:', response.usdCost);
    })
    .catch(err => {
        console.error('Error:', err.message);
    });
```

### Handling Responses

The response is automatically parsed and returned as an object with `data` and `usdCost` properties.

## Advanced Usage

### Custom Request Format

You can define a custom request format using the `RequestFormat` class.

```javascript
const requestFormat = new RequestFormat({
    url: 'https://another-api-url.com',
    method: 'POST',
    headers: { 'Custom-Header': 'value' },
    body: { additional: 'data' },
    authorization: 'Bearer your-token'
});

definition.req = requestFormat;
```

### Using Focus for Narrow Queries

The `Focus` class allows you to narrow down the fields you want to extract from the JSON schema.

```javascript
const focus = new Focus({
    prompt: 'Extract specific fields',
    fields: ['name', 'age'],
    keepOriginal: true
});

definition.narrowFocus = focus;
```

### Processing HTTP Responses

You can process HTTP responses using the `Res` class.

```javascript
client.sendRequest(prompt, definition)
    .then(response => {
        const result = Res.extractValue(response);
        console.log('Extracted Value:', result.value);
    })
    .catch(err => {
        console.error('Error:', err.message);
    });
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements.


