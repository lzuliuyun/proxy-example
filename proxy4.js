const http = require('http');
const express = require('express');
const httpProxy = require('http-proxy');
const cors = require('cors');
const proxy = httpProxy.createProxyServer();
const app = express();

var config = {
    originServer: 'http://127.0.0.1:8080', //项目开发地址
    clientInfo: {
        url: 'https://mls.cn-north-1.huaweicloud.com:22360/mls/', //实例侧访问地址
        cftk: '6W3V-I8UX-2EQL-TYL3-69W8-YWHH-FWKF-NDKG',  //实力侧cftk 在cookie中或者request header中查看
        session: '798c3aec-a23d-4cfe-84d5-549f3eaefa82' //实力侧session，在cookie中或者request header中查看
    }
};

var corsOptions = {
    origin: config.originServer,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204,
    credentials: true
};

app.use(cors(corsOptions));
// app.use(express.static('static'));

proxy.on('proxyReq', function (proxyReq, req, res, options) {
    proxyReq.setHeader('cftk', config.clientInfo.cftk);
});

// app.all('*', function (req, res, next) {
//     req.headers['cftk'] = config.clientInfo.cftk;
//     next();
// });

app.all('/v1.0/*', function (req, res) {
    // console.log('cftk', req.headers.cftk);
    proxy.web(req, res, {
        secure: false,
        // changeOrigin: true,
        target: config.clientInfo.url,
        cookieDomainRewrite: {
            SESSION: config.clientInfo.session
        }
    })
})

http.createServer(app).listen('8081', function () {
    console.log('代理服务已启动 --> http://127.0.0.1:8081')
})
