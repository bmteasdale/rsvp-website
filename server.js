console.log("Server.js started.")
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
console.log("Dependencies Enviroment Loaded")

const app = express();

// initialize routes.
app.use('/api', require('./src/server/routes/api'));
app.use(bodyParser.json());
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
app.listen(PORT, '0.0.0.0', () => console.log(`Server Connection Successful on port ${PORT}!`))