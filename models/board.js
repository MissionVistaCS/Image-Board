let boardSchema = new mongoose.Schema({
    _id: { type: String, required: true, unique: true, default: shortid.generate },
    categoryId: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true }
    letter: { type: String, required: true, unique: true }
    favIcon: { type: String, required: false, unique: false}
}, { collection: _db.get("db.collection.boards") });

let Board = mongoose.model("Board", boardSchema);
module.exports = Board;
