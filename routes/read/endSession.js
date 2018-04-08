const passport = require("passport");

module.exports = {
  '/read/endSession': {
    methods: ['post'],
    middleware: [],
    fn: function(req, res, next) {
      req.logout();
      req.session.destroy(function(err) {
        if (err) return next(err);
        res.json({ result: 'Success' });
      });
    }
  }
};