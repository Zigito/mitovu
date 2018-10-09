
const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: 'Algebra' },
    { id: 2, name: 'Geometry' },
    { id: 3, name: 'Calculus' },
    { id: 4, name: 'Fractions'},
    { id: 5, name: 'Integration'}
    
];

//Respond with "hello world" for requests that hit our root "/"
app.get('/', async (req, res) => {
 res.send('Mitovu App');
});

app.get('/api/courses', async (req, res) => { 
    res.send(courses);
});


app.post('/api/courses', async (req, res) => {
    const { error } = validateCourse(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    const course = {
        id: courses.length + 1,
        name: req.body.name
     };

    courses.push(course);
    res.send(course);
});

function validateCourse(course) {

    //define a schema
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course, schema);
}

//listen to port 3000 by default
app.listen(process.env.PORT || 3000);

module.exports = app;