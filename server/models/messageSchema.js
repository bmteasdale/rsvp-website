const mongoose = require('mongoose');
const {Schema} = mongoose;

const messageSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: String,
    message: {
        type: String,
        required: true
    },
    date_sent: {
        type: String,
        required: true
    }
});

var Message = new mongoose.model('Messages', messageSchema);
module.exports = Message;