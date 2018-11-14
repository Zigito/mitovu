//const Joi = require('joi');
const { Customer, validate } = require('../models/customer'); 
const mongoose = require('mongoose');
const _ = require('lodash');
var express = require('express');
const router = express.Router();

//Respond with "hello world" for requests that hit our root "/"
router.get('/', async (req, res) => {
    res.send('Welcome To Sitovu');
});


router.post('/', async (req, res) => {
    //input  validation
    const { error } = validate(req.body);
    if (error)  return res.status(400).send(error.details[0].message);


    let course = new Course({
        name: req.body.name,
        category: req.body.category
    });

    course = await course.save();

    res.send(course);
});


/* function validateCourse(course) {

    //define a Joi schema for validation
    const schema = {
        name: Joi.string().min(5).required(),
        category: Joi.string().min().required()
    };

    return Joi.validate(course, schema);
} */


module.exports = router; 