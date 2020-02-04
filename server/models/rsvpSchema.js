const mongoose = require('mongoose');
const {Schema} = mongoose;

const rsvpSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true
    },
    attendingStatus: {
        type: String,
        required: true
    },
    meal_selection: {
        type: String,
        default: "N/A"
    },
    additional_guests: {
        type: String,
        default: "N/A"
    },
    song_requests: {
        type: String,
        default: "N/A"
    },
    date_completed: {
        type: String,
        required: true
    }
});

var RSVP = mongoose.model('RSVP-forms', rsvpSchema);
module.exports = RSVP;