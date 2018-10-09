//const mongoose = require('mongoose');
const Joi = require('joi');
const express = require('express');
const router = express.Router();

//create the model
/* const Course = new mongoose.model('Course', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    }
}));
 */
/*  "/api/courses"
 *    GET: finds all courses
 *    POST: creates a new course
 */

router.get('/', (req, res) => {
    res.send('Mitovu to the world');
});

router.post('/', (req, res) => {

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

module.exports = router;