const express = require('express');
const bodyparser = require('body-parser');
const app = express();

const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');

//Connectign to the database
mongoose.connect(db, {useNewUrlParser: true}).then(
    () => {
        console.log('Successfully connected to the database')
    },
    err => {
        console.log('ERROR connecting to the database');
        throw err;
    }
);


app.listen(3000, () => {
    console.log('Listening on port 3000...')
});