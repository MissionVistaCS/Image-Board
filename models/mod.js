let mongoose = require("mongoose"),
    bcrypt = require("bcrypt-nodejs"),
    shortid = require("shortid");

const SALT_FACTOR = 4;

let modSchema = new mongoose.Schema({
  _id: { type: String, required: true, default: shortid.generate },
  username: { type: String, required: true },
  password: { type: String, required: true }
}, { collection: _db.get("db.collection.mods") });

function noop() {};

modSchema.pre('save', function (done) {
  let user = this; //Reference to user model

  if (!user.isModified("password")) {
    return done();
  }

  bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
    if (err) {
      return done(err);
    }
    bcrypt.hash(user.password, salt, noop, function (err, hashedPassword) {
      if (err) {
        return done(err);
      }
      user.password = hashedPassword;
      done();
    });
  });
});

modSchema.methods.checkPassword = function(guess, done) {
  bcrypt.compare(guess, this.password, function(err, isMatch) {
    done(err, isMatch);
  });
};

let Mod = mongoose.model('Mod', modSchema);
module.exports = Mod;
