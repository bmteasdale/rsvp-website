const express = require('express');
const bodyParser = require('body-parser');
const RSVPModel = require('../models/rsvpSchema');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.post('/rsvp-submit', async (req, res) => {

    var rsvp = new RSVPModel({
        full_name: req.body.fullName,
        attendingStatus: req.body.attendance,
        roast_beef_qty: req.body.roastBeefQty,
        salmon_qty: req.body.salmonQty,
        chicken_qty: req.body.chickenQty,
        lasagna_qty: req.body.lasagnaQty,
        guest_names: req.body.additionalGuests,
        song_requests: req.body.songRequests,
        message: req.body.rsvpMessage,
        date_completed: new Date()
    });

    try {
        await rsvp.save();
        res.redirect('/rsvp-submit');
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = app;