var express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://kogoradev:CnxwQbK7SykLRq@206.189.17.119:27017/mitovu')
    .then(() => console.log('Connected to MongoDb...'))
    .catch(err => console.error('Could not connect to MongoDb', err));

//defines the shape of course documents
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});


const Course = mongoose.model('Course', courseSchema);


async function createCourse() {
    const course = new Course({
        name: 'Geometry',
        author: 'Osagie',
        tags: ['shapes', '3d', '2d'],
        isPublished: true
    });

    const result = await course.save();
    //console.log(result);
}

var courseResult  = createCourse();

var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
    res.send('Mitovu App');
});

//Respond with "hello world" for requests that hit our root "/"
/* app.get('/courses', function (req, res) {
    const courses = getCourses();
    res.send(courses);
}); */


//listen to port 3000 by default
app.listen(process.env.PORT || 3000);

module.exports = app;

