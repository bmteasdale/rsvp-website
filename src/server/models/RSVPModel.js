const mongoose = require('mongoose');
const { Schema } = mongoose;

const RSVPSchema = new Schema({
    rsvps: { 
        type: Array, 
        required: [true, "No RSVP included"]
    },
    date_submitted: {
        type: String,
    }
});

const RSVPModel = new mongoose.model('rsvp', RSVPSchema);
module.exports = RSVPModel;