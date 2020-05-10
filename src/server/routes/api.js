const RSVPModel = require('../models/RSVPModel');
const express = require('express');
const router = express.Router();

router.get('/demo', async (req, res) => res.send({ msg: 'user api Works' }));

// Search for RSVP from db.
router.get('/rsvp/:queryName', (req, res) => {
    var { queryName } = req.params;  
    RSVPModel.find({"rsvps.name": queryName}).then( rsvps => res.send(rsvps) );
});


// 
// Update RSVP -- later step
// router.put('/rsvp/:id', (req, res) => {
//     const { id } = req.params;
// })

module.exports = router;