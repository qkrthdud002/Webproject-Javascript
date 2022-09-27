const http = require('http');
const app = require('./app'); // 만들어둔 express 객체

const server = http.createServer(app);
const port=3000;
server.listen(port);