const Joi = require('joi');
const express = require('express');
const mongoose = require('mongoose');

const courses = require('/home/aghedo/mitovu/routes/course');

mongoose.connect('mongodb://kogoradev:CnxwQbK7SykLRq@206.189.17.119:27017/mitovu')
    .then(() => console.log('Connected to MongoDb...'))
    .catch(err => console.error('Could not connect to MongoDb', err));

const app = express();

app.use(express.json());

app.use('/api/course', courses);


//listen to port 3000 by default
app.listen(process.env.PORT || 3000);

module.exports = app;