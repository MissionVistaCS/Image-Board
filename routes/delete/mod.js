const Mod = require(_base + 'models/mod');

module.exports = {
    '/delete/mod': {
        methods: ['delete'],
        fn: function(req, res, next) {
            let _id = req.body._id;
            Mod.findByIdAndRemove(_id, function(err, mod) {
              if(err) {
                return next(err);
              }
              res.json({result: mod});
            });
        }
    }
};
