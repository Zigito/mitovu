const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://kogoradev:/CnxwQbK7SykLRq@206.189.17.119:27017/mitovu')
    .then(() => console.log('Connected to MongoDb...'))
    .catch(err => console.error('Could not connect to MongoDb', err));

//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
    res.send('Mitovu App');
});

//Respond with "hello world" for requests that hit our root "/"
/* app.get('/courses', function (req, res) {
    const courses = getCourses();
    res.send(courses);
}); */


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

