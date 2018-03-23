let mongoose = require("mongoose");
let shortid = require("shortid");

let banSchema = new mongoose.Schema({
    _id: { type: String, required: true, default: shortid.generate },
    time: { type: Date, required: true, default: Date.now },
    ip: { type: String, required: true }
});

let Ban = mongoose.model("Ban", banSchema);
module.exports = Ban;
