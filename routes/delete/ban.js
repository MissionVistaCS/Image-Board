const Ban = require(_base + 'models/ban'),
      ensureAuthenticity = require(_base + 'middleware/ensureAuthenticity');

module.exports = {
    '/delete/ban': {
        methods: ['delete'],
	middleware: [ensureAuthenticity],
        fn: function(req, res, next) {
            let ip = req.body.ip;
            Ban.findOneAndRemove({ ip: ip }, function(err, ban) {
              if(err) {
                return next(err);
              }
              res.json({ result: ban });
            });
        }
    }
};
