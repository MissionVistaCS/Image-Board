const Board = require(_base + 'models/board');

module.exports = {
    '/delete/board': {
        methods: ['delete'],
        fn: function(req, res, next) {
            let letter = req.body.letter;
            Board.findOneAndRemove({ letter: letter }, function(err, board) {
              if(err) {
                return next(err);
              }
              res.json({result: board});
            });
        }
    }
};
