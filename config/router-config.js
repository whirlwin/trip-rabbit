var indexRoute = require('../routes/index');

function configure(app) {
    setUpRoutes(app);
    configure404handler(app);
    configureDevHandler(app);
    configureProdHandler(app);
}

function setUpRoutes(app) {
    app.use('/', indexRoute);
}

function configure404handler(app) {
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });
}

function configureDevHandler(app) {
    if (app.get('env') === 'development') {
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }
}

function configureProdHandler(app) {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}

module.exports = {
    configure: configure
};