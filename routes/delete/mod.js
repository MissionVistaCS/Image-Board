const Mod = require(_base + 'models/mod'); // TODO: Finish mod model

module.exports = {
    '/delete/mod': {
        methods: ['delete'],
        fn: function(req, res, next) {
            let _id = req.query._id;
            Mod.findByIdAndRemove(_id); //TODO: Add callback function TYLER
        }
    }
};
