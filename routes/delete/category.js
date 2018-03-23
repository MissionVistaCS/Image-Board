const Category = require(_base + 'models/category');

module.exports = {
    '/delete/category': {
        methods: ['delete'],
        fn: function(req, res, next) {
            let name = req.query.name;
            Category.findOneAndRemove({ name: name }); //TODO: Add callback function TYLER
        }
    }
};
