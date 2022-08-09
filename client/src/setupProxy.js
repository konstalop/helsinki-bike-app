const { createProxyMiddleware } = require('http-proxy-middleware');
/**
 * Setupping proxy which enables communication between backend and frontend
 * in the same URL.
 * @param {*} app 
 */
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};