const Category = require(_base + 'models/category');

module.exports = {
    '/create/category': {
        methods: ['post'],
        middleware: [],
        fn: function(req, res, next) {
            const name = req.body.name;
            Category.findOne({ name: name }, function(err, result) {
                if (err) {
                    return next(err);
                }

                if (result) {
                    return next(new Error('Category with that name already exists.'));
                }

                let cat = new Category({
                    name: name
                });

                cat.save(function(err) {
                    if (err) {
                        return next(err);
                    }

                    res.json({ result: { name: name } });
                });
            });
        }
    }
}
