const express = require('express'),
      routescan = require('express-routescan'),
      bodyParser = require('body-parser'),
      session = require("express-session"),
      cookieParser = require('cookie-parser'),
      PropertiesReader = require('properties-reader'),
      multer = require('multer');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: 'erferfre234324reevvfe',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: Number(100000) }
}));

//Globals

global._base = __dirname + '/';
global._db = PropertiesReader(_base + 'resources/db.properties');
global._env = app.get('env');
global._isDev = _env === 'development';
global._isProd = _env === 'production';

console.info = function(message) {
    console.log('[INFO] ' + message);
}

console.debug = function(message) {
    console.log('[DEBUG] ' + message);
}

console.critical = function(message) {
    console.log('[!!! CRITICAL !!!] ' + message);
}

const setUpDatabase = require(_base + 'services/SetupDatabaseService');
const setUpPassport = require(_base + 'services/SetUpPassport');

setUpDatabase();
setUpPassport();

routescan(app, {
    ignoreInvalid: true
});

app.use(function (err, req, res, next) {
    console.debug('Error encountered: ' + err.message);
    console.error(err);
    res.json({ error: err.message });
});

app.listen(3001, ()=>{
    console.log('API listening on port 3001');
});
