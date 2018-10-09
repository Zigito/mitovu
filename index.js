
const mongoose = require('mongoose');
const { Course, validate } = require('./models/course');
const Joi = require('joi');
const home = require('./routes/home');
const courses = require('./routes/courses');

const express = require('express');
const app = express();

mongoose.connect('mongodb://kogoradev:/79Uc^7P&==G6\'Z@206.189.17.119:27017/mitovu')
    .then(() => console.log('Connected to MongoDb...'))
    .catch(err => console.error('Could not connect to MongoDb', err));


//app.use('/', home);
//app.use('/api/courses', courses);// for any route that starts with /api/courses use the courses router

app.get('/', async (req, res) => {
    //const courses = await Course.find().sort('name');
    res.send('Mitovu to the world');
});

app.post('/', async (req, res) => {
    //const { error } = validate(req.body);
   // if (error) return res.status(400).send(error.details[0].message);

    let course = new Course({ name: req.body.name });
    course = await course.save();

    res.send(course);
});

// Initialize the app
var port = process.env.PORT || 3000 ; 
app.listen(port, () => {
    if (app.get('env') === 'development') {
        console.log(`App now running on port ${port}`)
    }
});

module.exports = app;