const mongoose = require('mongoose');
const Joi = require('joi');
const express = require('express');
const router = express.Router(); // definig a router



//create the model
const Course = new mongoose.model('Course', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    }
}));

/*  "/api/courses"
 *    GET: finds all courses
 *    POST: creates a new course
 */

router.get('/', (req, res) => {
    res.send(courses);
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
    courses.push(course);
    res.send(course);
});


/*  "/api/courses/:id"
*    GET: find course by id
*    PUT: update course by id
*    DELETE: deletes course by id
*/

router.get('/:id', (req, res) => {
    //lookup if course with id        
    // If course doesn't exist return 404
    console.log('Put');
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) { return res.status(404).send('The course with given Id was not found.'); }

    res.send(course);
});



router.put('/:id', (req, res) => {
    //lookup if course with id        
    // If course doesn't exist return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) { return res.status(404).send('The course with given Id was not found.'); }

    //input  validation
    const { error } = validateCourse(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    //update course details
    course.name = req.body.name;

    //return the updated course
    res.send(course);
});


router.delete('/:id', (req, res) => {
    //lookup if course with id        
    // If course doesn't exist return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send('The course with given Id was not found.');
    }

    const index = courses.indexOf(course);//find the index of this course in the array and remove it
    courses.splice(index, 1);

    //return the deleted course
    res.send(courses);
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