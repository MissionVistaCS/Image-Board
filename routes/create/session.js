const passport = require("passport");

module.exports = {
	'/create/session': {
		methods: ['post'],
		middleware: [passport.authenticate("login", {
			successRedirect: "session/success",
			failureRedirect: "session/fail",
			failureFlash: false //Flash not needed
		})],
		fn: function (req, res, next) {

		}
	},
	'/create/session/success': {
		methods: ['get'],
		fn: function (req, res, next) {
			res.json({ result: 'Success' });
		}
	},
	'/create/session/fail': {
		methods: ['get'],
		fn: function (req, res, next) {
			next(new Error('Incorrect credentials.'));
		}
	}
};
