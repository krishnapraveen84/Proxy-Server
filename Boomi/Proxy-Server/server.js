const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(
  '/ws/soap/v1/dummy', 
  createProxyMiddleware({
    target: 'http://localhost:9090', 
    changeOrigin: true
  })
);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
