const passport = require('passport');

module.exports = function(req, res, next) {
  if(req.isAuthenticated()) {
    next();
  } else {
    next(new Error('Not logged in.'));
  }
};