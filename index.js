const express = require('express'),
      routescan = require('express-routescan'),
      PropertiesReader = require('properties-reader');
const app = express();

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
setUpDatabase();

routescan(app, {
    ignoreInvalid: true
});

app.listen(3001, ()=>{
    console.log('API listening on port 3001');
});
