const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('mongodb').MongoClient;
const MessageModel = require('../models/messageSchema');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.post('/message-submit', async (req, res) => {
    var date_ob = new Date();
    var Day = date_ob.getDate();
    var Month = date_ob.getMonth() + 1;
    var Year = date_ob.getFullYear();
    var CurrentDate = Year + '/' + Month + '/' + Day;

    var Message = new MessageModel({
        first_name: req.body.fname,
        last_name: req.body.lname,
        email: req.body.email,
        message: req.body.message,
        date_sent: CurrentDate
    })

    try {
        await Message.save();
        res.redirect('/message-submit');
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = app;