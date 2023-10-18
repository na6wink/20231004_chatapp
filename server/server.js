const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/chatpp');
const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error"));
db.once('open', () => {
    console.log('Database connected');
})

const app = express();
app.use(cors());

app.get('/api', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json({ "users": ["userOne", "userTwo", "userThree", "userFour"] });
});

app.get('/', (req, res) => {
    res.json({ message: "Welcome to the API!" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serving on port ${port}`);
});