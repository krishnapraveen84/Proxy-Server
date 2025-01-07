const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(
  '/api', // Proxy all requests starting with /api
  createProxyMiddleware({
    target: 'http://localhost:9090', // Your local API URL
    changeOrigin: true,
    pathRewrite: {
      '^/api': '', // Remove the /api prefix
    },
  })
);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
