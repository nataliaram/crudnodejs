var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookingSchema = new Schema({
    userId: {type: String, required: true, max: 100},
    itemId: {type: String, required: true, max: 100},
    count: {type: Number, required: true},
    checkIn: { type: Date, default: Date.now },
    checkOut: { type: Date, default: null },
});

module.exports = mongoose.model('Booking', BookingSchema);
