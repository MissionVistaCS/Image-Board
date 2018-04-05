const passport = require("passport");

module.exports = {
	'/create/session': {
		methods: ['post'],
		middleware: [
			passport.authenticate("login", {
				successRedirect: "/",
				failureRedirect: "/login",
				failureFlash: false
		})],
		fn: function(req, res, next) {
			
		}
	}
}
