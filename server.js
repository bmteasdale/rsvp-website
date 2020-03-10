const express = require('express');
const mongoose = require('mongoose');
const chalk = require('chalk');
const rsvpRouter = require('./server/routes/rsvpRoute');
const messageRouter = require('./server/routes/messageRoute')
require('dotenv').config()

const app = express();

// Use Static files
app.use('/src', express.static(__dirname + '/src'));

// MongoDB Atlas connection URI
mongoose.connect('mongodb+srv://'+ process.env.CLUSTER_USER +':' + process.env.CLUSTER_PASS +'@rsvp-form-data-e9b0b.mongodb.net/'+ process.env.DB_NAME +'?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// render /
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
// render /index.html
app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
// render /contact.html
app.get('/contact.html', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html');
});

//render /submission.html on RSVP form submission
app.use(rsvpRouter);
app.get('/rsvp-submit', (req, res) => {
    res.sendFile(__dirname + '/public/submission.html');
});

//render /message.html on contact form submission
app.use(messageRouter);
app.get('/message-submit', (req,res) => {
    res.sendFile(__dirname + '/public/message.html');
});

app.listen(process.env.PORT || 8000, () => { console.log(chalk.greenBright.inverse.bold(`Server is running on PORT ${process.env.PORT}`)) });
