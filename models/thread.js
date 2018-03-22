let mongoose = require("mongoose");
let threadSchema = mongoose.Schema({
    _id: { type: String, required: true, unique: true, default: shortid.generate },
    title: { type: String, required: true, unique: false },
    boardId: { type: String, required: true, unique: false },
    name: { type: String, required: true, unique: false },
    content: { type: String, required: true, unique: false },
    attachment: { type: String, required: false, unique: false },
    timeStamp: { type: Date, required: true, unique: false, default: Date.now() },
    ip: { type: String, required: true, unique: false, default: request.connection.remoteAddress },
    pinned: { type: Boolean, required: true, unique: false, default: false }
}, { collection: _db.get("db.collection.threads") });

let Thread = mongoose.model('thread', threadSchema);

module.exports = Thread;
