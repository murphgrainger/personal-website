var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/../client')))

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use('*', function(req, res) {
    res.sendFile('index.html', {
        root: path.join(__dirname, '/../client')
    })
})

app.use(function(err, req, res, next) {
    const response = {
        message: err.message
    }
    if (req.app.get('env') === 'development') {
        response.stack = err.stack
    }

    res.status(err.status || 500).json(response);
});

module.exports = app;
