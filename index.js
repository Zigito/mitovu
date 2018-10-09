/* const courses = require('./routes/courses');
const homes = require('./routes/home'); */
const Joi = require('joi');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Mitovu to the world');
});

app.get('/api/courses', (req, res) => {
    res.send('Mitovu to the world');
});

app.post('/api/courses', (req, res) => {

    //input  validation
    const { error } = validateCourse(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    //courses.push(course);
    res.send(course);
});

// Course Validation
function validateCourse(course) {

    //define a Joi schema for validation
    const schema = {
        name: Joi.string().min(5).required()
        //   level: Joi.number().min().required()
    };

    return Joi.validate(course, schema);
}


//listen to port 3000 by default
app.listen(process.env.PORT || 3000);

module.exports = app;