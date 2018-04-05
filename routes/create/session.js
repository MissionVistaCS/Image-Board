const passport = require("passport");

module.exports = {
	'/create/session': {
		methods: ['post'];
		fn: function(req, res, next) {
			passport.authenticate("login", {
				successRedirect: "/",
				failureRedirect: "/login",
				failureFlash: false
			});
		}
	}
}
