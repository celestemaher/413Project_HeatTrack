let db = require("../db");

let heartTrackDataSchema = new db.Schema({
    heartRateAvg:   Number, //BPM
    oxygenLevels:   Number, //percentage
    deviceId:      String
    //timeCollected:  { type: Date, default: Date.now }
});

var heartTrackData = db.model("heartTrackData", heartTrackDataSchema);

module.exports = heartTrackData;
