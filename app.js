var http = require('http');
var appConfig = require('./config/app-config');

function start() {
    var app = appConfig.configure();
    var server = http.createServer(app);
    var port = app.get('port');
    server.listen(port);
    console.log('App started on port ' + port);
}

module.exports = {
    start: start
};
