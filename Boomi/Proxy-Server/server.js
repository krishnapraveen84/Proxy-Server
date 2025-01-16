// const express = require('express');
// const { createProxyMiddleware } = require('http-proxy-middleware');

// const app = express();

// app.use(
//   '/api', 
//   createProxyMiddleware({
//     target: 'http://localhost:9090', 
//     changeOrigin: true,
//     pathRewrite: {
//       '^/api': '', 
//     },
//   })
// );

// app.listen(5000, () => {
//   console.log('Server running on port 5000');
// });


const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Use the public backend URL instead of localhost
const targetBackendUrl = 'http://localhost:9090';

app.use(
  '/api', 
  createProxyMiddleware({
    target: targetBackendUrl,
    changeOrigin: true,
    pathRewrite: {
      '^/api': '', // Adjust based on backend route handling
    },
  })
);

// Use PORT environment variable for Render
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
