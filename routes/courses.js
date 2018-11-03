const Joi = require('joi');
const _ = require('lodash');
var express = require('express');
const router = express.Router();

//Respond with "hello world" for requests that hit our root "/"
router.get('/', function (req, res) {
    res.send('Mitovu App');
});


router.post('/', function (req, res) {

    //input  validation
    const { error } = validateCourse(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const course = {
        name: req.body.name,
        category: req.body.category
    };

    res.send(course);
});


function validateCourse(course) {

    //define a Joi schema for validation
    const schema = {
        name: Joi.string().min(5).required(),
        category: Joi.string().min().required()
    };

    return Joi.validate(course, schema);
}


module.exports = router; 