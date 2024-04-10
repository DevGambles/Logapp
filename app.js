require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var middle = require('./modules/middleware');
//var bodyParser = require('body-parser');
var cors = require('cors');
Array.prototype.contains = function ( needle ) {
    for (i in this) {
        if (this[i] == needle) return true;
    }
    return false;
}
Array.prototype.getIndex = function ( needle ) {
    for (i in this) {
        if (this[i] == needle) return i;
    }
    return false;
}
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
/*Globals */

/* Globals */
var app = express();
app.set('env', process.env.ENV);
app.use(cors());
console.log('STARTING LOG API VERSION :', process.env.VERSION);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(middle);
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;
