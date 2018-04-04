let mongoose = require("mongoose"),
//    bcrypt = require("bcrypt"),
    shortid = require("shortid");

let modSchema = new mongoose.Schema({
  _id: { type: String, required: true, default: shortid.generate },
  email: { type: String, required: true },
  password: { type: String, required: true }
}, { collection: _db.get("db.collection.mods") });

// TODO: implement check password method
// modSchema.methods.checkPassword = function(guess, done) {
//   bcrypt.compare(guess, this.password, function(err, match) {
//     done(err, match);
//   });
// };
// TODO: remove this test implementation of the checkPassword method
modSchema.methods.checkPassword = function(guess, done) {
  done(null, true);
}
let Mod = mongoose.model('Mod', modSchema);
module.exports = Mod;
