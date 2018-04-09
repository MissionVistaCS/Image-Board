let mongoose = require("mongoose");
let shortid = require("shortid");

let replySchema = new mongoose.Schema({
    _id: { type: String, required: true, default: shortid.generate },
    name: { type: String, required: true, default: "Anonymous"},
    time: { type: Date, required: true, default: Date.now },
    ip: { type: String, required: true },
    attachment_path: { type: String, required: false },
    attachment_name: { type: String, required: false },
    threadId: { type: String, required: true },
    content: { type: String, required: false }
});

let Reply = mongoose.model("Reply", replySchema);
module.exports = Reply;
