const Reply = require(_base + 'models/reply');

module.exports = {
    '/delete/reply': {
        methods: ['delete'],
        fn: function(req, res, next) {
            let _id = req.query._id;
            Reply.findByIdAndRemove(_id, function(err, reply) {
              if(err) {
                return next(err);
              }
              res.json({result: reply});
            });
        }
    }
};
