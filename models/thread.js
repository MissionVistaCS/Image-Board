let mongoose = require("mongoose");
let shortid = require("shortid");

let threadSchema = mongoose.Schema({
    _id: { type: String, required: true, default: shortid.generate },
    title: { type: String, required: true },
    boardId: { type: String, required: true },
    name: { type: String, required: true, default: "Anonymous" },
    content: { type: String, required: true },
    attachment_path: { type: String, required: false },
    attachment_name: { type: String, required: false },
    timeStamp: { type: Date, required: true, default: Date.now() },
    ip: { type: String, required: true },
    pinned: { type: Boolean, required: true, default: false }
}, { collection: _db.get("db.collection.threads") });

let Thread = mongoose.model('thread', threadSchema);
module.exports = Thread;
