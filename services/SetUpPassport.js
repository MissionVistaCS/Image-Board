let LocalStrategy =  require('passport-local').Strategy,
    Mod = require(_base + 'models/mod'),
    passport = require("passport");

module.exports = function() {
  passport.serializeUser(function(mod, done) {
    done(null, mod._id);
  });
  passport.deserializeUser(function(_id, done) {
    Mod.findById(_id, function(err, mod) {
      done(err, mod);
    });
  });
}

let strategy = new LocalStrategy(function(_id, password, done) {
  Mod.findById(_id, function(err, mod) {
    if(err) {
      return done(err);
    } else if(!mod) {
      return done(null, false, { message: "No such mod of id " + _id });
    }
    mod.checkPassword(password, function(err, matching) {
      if(err) {
        return done(err);
      } else if(match) {
        return done(null, mod);
      } else {
        return done(null, false, { message: "Incorrect password." })
      }
    });
  });
});
passport.use("login", strategy);
