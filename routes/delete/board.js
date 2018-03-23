const Board = require(_base + 'models/board');

module.exports = {
    '/delete/board': {
        methods: ['delete'],
        fn: function(req, res, next) {
            let letter = req.query.letter;
            Board.findOneAndRemove({ letter: letter }); //TODO: Add callback function TYLER
        }
    }
};
