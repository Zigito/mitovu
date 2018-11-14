//const Joi = require('joi');
const { Customer, validate } = require('../models/course'); 
const mongoose = require('mongoose');
const _ = require('lodash');
var express = require('express');
const router = express.Router();

//Respond with "hello world" for requests that hit our root "/"
router.get('/', async (req, res) =>{
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

module.exports = router; 