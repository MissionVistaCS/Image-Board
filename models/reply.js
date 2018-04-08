let mongoose = require("mongoose");
let shortid = require("shortid");

let replySchema = new mongoose.Schema({
    _id: { type: String, required: true, default: shortid.generate },
    time: { type: Date, required: true, default: Date.now },
    name: { type: String, required: true, default "Anonymous" },
    ip: { type: String, required: true }
});

let Reply = mongoose.model("Reply", replySchema);
module.exports = Reply;
