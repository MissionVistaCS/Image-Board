let mongoose = require("mongoose");
let shortid = require('shortid');
let replySchema = new mongoose.Schema({
    _id: { type: String, required: true, unique: true, default: shortid.generate },
    time: { type: Date, required: true, unique: false, default: Date.now() },
    ip: { type: String, required: true, unique: false }
});

let Reply = mongoose.model("Reply", replySchema);

module.exports = Reply;
