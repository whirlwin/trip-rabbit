var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

function configure() {
    var app = express();
    
    app.set('views', path.join(__dirname, '..', 'views'));
    app.set('view engine', 'jade');
    app.set('port', 8080);

    app.use(favicon(path.join(__dirname, '..', 'public/images', 'favicon.ico')));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, '..', 'public')));

    if (app.get('env') === 'development') {
        app.locals.pretty = true;
    }

    return app;
}

module.exports = {
    configure: configure
};
