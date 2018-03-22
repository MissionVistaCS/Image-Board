const Category = require(_base + 'models/category');

module.exports = {
  '/delete/category': {
    methods: ['delete'],
    fn: function(req, res, next) {
      let name = req.query.name;
      let category = Category.findOne({name: name}, function(err) {
        if(err) {
          return(console.log('Error category ' + name));
        }
      });
      Category.deleteOne(category); // TODO: Call services method?
    }
  }
};
