const mongoose = require('mongoose');
const {Schema} = mongoose;

const rsvpSchema = new Schema({
    full_name: {
        type: String,
        required: true
    },
    attendingStatus: {
        type: String,
        required: true
    },
    roast_beef_qty: {
        type: Number,
        default: 0
    },
    salmon_qty: {
        type: Number,
        default: 0
    },
    chicken_qty: {
        type: Number,
        default: 0
    },
    lasagna_qty: {
        type: Number,
        default: 0
    },
    guest_names: {
        type: String,
        default: "N/A"
    },
    song_requests: {
        type: String,
        default: "N/A"
    },
    message:{
        type: String,
        default:"N/A"
    },
    date_completed: {
        type: String,
        required: true
    }
});

var RSVP = mongoose.model('RSVP-forms', rsvpSchema);
module.exports = RSVP;