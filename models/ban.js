let banSchema = new mongoose.Schema({
    _id: { type: String, required: true, unique: true, default: shortid.generate },
    time: { type: Date, required: true, unique: false, default: Date.now() },
    ip: {type: String, required: true, unique: false }
});

let Ban = mongoose.model("Ban", banSchema);

module.exports = Ban;
