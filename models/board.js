let mongoose = require("mongoose");

let boardSchema = new mongoose.Schema({
    
    categoryName: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    letter: { type: String, required: true, unique: true },
    favIcon: { type: String }
}, { collection: _db.get("db.collection.boards") });

let Board = mongoose.model("Board", boardSchema);
module.exports = Board;
