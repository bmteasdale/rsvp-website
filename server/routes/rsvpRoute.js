const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('mongodb').MongoClient;
const RSVPModel = require('../models/rsvpSchema');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.post('/rsvp-submit', async (req, res) => {
    var date_ob = new Date();
    var Day = date_ob.getDate();
    var Month = date_ob.getMonth() + 1;
    var Year = date_ob.getFullYear();

    var CurrentDate = Year + '/' + Month + '/' + Day;

    var RSVP = new RSVPModel({
        full_name: req.body.fullName,
        attendingStatus: req.body.attendance,
        meal_selection: req.body.mealChoice,
        additional_guests: req.body.additionalGuests,
        song_requests: req.body.songRequests,
        date_completed: CurrentDate
    });

    try {
        await RSVP.save();
        res.redirect('/rsvp-submit');
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = app;