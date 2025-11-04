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
