var expressConfig = require('./express-config');
var routerConfig = require('./router-config');

function configure() {
    var app = expressConfig.configure();
    routerConfig.configure(app);
    return app;
}

module.exports = {
    configure: configure
};