let modSchema = new mongoose.Schema({

}, { collection: _db.get("db.collection.mods") });

let Mod = mongoose.model('Mod', modSchema);

module.exports = Mod;
