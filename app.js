var http = require('http');
var appConfig = require('./config/app-config');

function start() {
    var app = appConfig.configure();
    var server = http.createServer(app);
    server.listen(app.get('port'));
}

module.exports = {
    start: start
};