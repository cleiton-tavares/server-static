var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(1221);


console.log('API rodando em  http://%s:%s : 1221');
