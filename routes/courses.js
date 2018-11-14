//const Joi = require('joi');
const { Course, validate } = require('../models/course'); 
const mongoose = require('mongoose');
const _ = require('lodash');
const express = require('express');

const router = new express.Router();

//Respond with "hello world" for requests that hit our root "/"
router.get('/', async (req, res) =>{
    res.send('Welcome To Sitovu');
});

module.exports = router; 