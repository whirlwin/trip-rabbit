var expressConfig = require('./express-config');
var fbAuthConfig = require('./fb-auth-config');
var routerConfig = require('./router-config');

function configure() {
    var app = expressConfig.configure();
    fbAuthConfig.configure();
    routerConfig.configure(app);
    return app;
}

module.exports = {
    configure: configure
};