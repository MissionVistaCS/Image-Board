let mongoose = require("mongoose");
let shortid = require("shortid");

let categorySchema = new mongoose.Schema({
    _id: { type: String, required: true, default: shortid.generate },
    name: { type: String, required: true, unique: true }
}, { collection: _db.get("db.collection.category") });

let Category = mongoose.model("Category", categorySchema);
module.exports = Category;
