const Mod = require(_base + 'models/mod'); // TODO: Finish mod model

module.exports = {
    '/delete/mod': {
        methods: ['delete'],
        fn: function(req, res, next) {
            let _id = req.query._id;
            Mod.findByIdAndRemove(_id, function(err, mod) {
              if(err) {
                return next(err);
              }
              res.json({result: mod});
            });
        }
    }
};
