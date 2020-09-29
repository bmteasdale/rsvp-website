const express = require('express');
const mongoose = require('mongoose');
const RSVPModel = require('../models/RSVPModel');
require('dotenv').config();

const app = express();

const router = express.Router();

// Search for RSVP from db.
router.get('/rsvp/:queryName', async (req, res) => {
    var { queryName } = req.params;  
    await RSVPModel.find({"rsvps.name": queryName}).then( rsvps => res.send(rsvps) );
});

// Update RSVP 
router.put('/rsvp/:doc', async (req, res) => {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var fullDate = `${day}/${month}/${year}`
    // retrieve JSON document passed through URL
    const doc = req.params.doc;
    // decode encoded URL parameters and parse JSON from string.
    var parsedDoc = JSON.parse(decodeURIComponent(doc));
    await RSVPModel.updateOne({ _id: parsedDoc._id }, { rsvps: parsedDoc.rsvps, date_submitted: fullDate }, function (error, res) {
        if (error) {
            console.log(error);
        }
        else {
            console.log('RSVP successfully updated!');
        }
    });
})

module.exports = router;