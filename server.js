const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const enforce = require('express-sslify');
const http = require('http');
require('dotenv').config();

const app = express();

// initialize routes.
app.use('/api', require('./src/server/routes/api'));
app.use(bodyParser.json());
app.use(enforce.HTTPS({trustProtoHeader: true}));
app.use(express.urlencoded({extended:false}));

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true})

let db = mongoose.connection;

db.once('open', function () {
    console.log('Connected to MongoDB Atlas!');
});

db.on('error', (err) => {
    console.log('Error: ' + err);
});

if (process.env.NODE_ENV === "production") {
    // Set static folder
    app.use(express.static(path.resolve(__dirname, 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 8080;
http.createServer(app).listen(PORT, function() {
    console.log(`Server Connection Successful on port ${PORT}!`);
});