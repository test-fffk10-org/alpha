// Note: Update the 'input' path to point to your OpenAPI/Swagger specification file
// Example: './api-spec.yaml' or './openapi.json'
export default {
  api: {
    input: './api-spec.yaml',
    output: {
      mode: 'tags-split',
      target: './src/api/generated',
      schemas: './src/api/model',
      client: 'react-query',
      mock: false,
    },
  },
};