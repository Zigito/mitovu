var express = require('express');
const _ = require('lodash');
const mongoose = require('mongoose');
mongoose.connect('mongodb://kogoradev:CnxwQbK7SykLRq@206.189.17.119:27017/mitovu')
    .then(() => console.log('Connected to MongoDb...'))
    .catch(err => console.error('Could not connect to MongoDb', err));


var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
    res.send('Mitovu App');
});
user = new User(_.pick(req.body, ['name', 'email', 'password']));


router.post('/', (req, res) => {

    //input  validation
    const { error } = validateCourse(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

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


//Respond with "hello world" for requests that hit our root "/"
/* app.get('/courses', function (req, res) {
    const courses = getCourses();
    res.send(courses);
}); */


//listen to port 3000 by default
app.listen(process.env.PORT || 3000);

module.exports = app;

