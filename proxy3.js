const http = require('http')
const express = require('express')
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer()

proxy.on('proxyReq', function(proxyReq, req, res, options) {
    proxyReq.setHeader('cftk', '6W3V-I8UX-2EQL-TYL3-69W8-YWHH-FWKF-NDKG');
});

var server = http.createServer(function(req, res) {
    proxy.web(req, res, {
        secure: false,
        target: 'https://mls.cn-north-1.huaweicloud.com:22360/mls/',
        cookieDomainRewrite:  {
            SESSION: "798c3aec-a23d-4cfe-84d5-549f3eaefa82"
        }
    });
  });
  
  console.log("listening on port 5050")
  server.listen(8084);

