const express = require('express');
const path = require('path');

const app = express();
app.use('/static', express.static('public'));

// render /
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})
console.log(__dirname);

// render /index.html
app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

// render /contact.html
app.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/contact.html'));
})

app.listen(8000);
