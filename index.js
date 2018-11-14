const Joi = require('joi');
const mongoose = require('mongoose');
const courses = require('./routes/courses');

const express = require('express');
const app = express();

mongoose.connect('mongodb://kogoradev:CnxwQbK7SykLRq@206.189.17.119:27017/mitovu')
    .then(() => console.log('Connected to MongoDb...'))
    .catch(err => console.error('Could not connect to MongoDb', err));

app.use(express.json());
app.use('/api/courses', courses);


// Initialize the app
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));