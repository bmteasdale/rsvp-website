const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// initialize routes.
app.use('/api', require('./src/server/routes/api'));
app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}));

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true})

let db = mongoose.connection;

db.once('open', function () {
    console.log('Connected to MongoDB Atlas!');
});

db.on('error', (err) => {
    console.log('Error: ' + err);
});



app.listen(8080, () => console.log('app listening at http://localhost:8080'))