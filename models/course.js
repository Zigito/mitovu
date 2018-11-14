const Joi = require('joi');
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    category: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    }
});


const User = mongoose.model('Course', courseSchema);

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).max(50).required(),
        category: Joi.string().min(5).max(255).required()
    };

    return Joi.validate(course, schema);
}

exports.Customer = Course;
exports.validate = validateCourse;