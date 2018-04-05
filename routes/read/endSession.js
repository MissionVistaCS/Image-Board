const passport = require("passport");

module.exports = {
  'read/endSession': {
    methods: ['post'],
    fn: function(req, res, next) {
      req.logout();
      res.redirect("/");
    }
  }
}
