
const mongoose = require('mongoose');
const Joi = require('joi');
const home = require('./routes/home');
const courses = require('./routes/courses');
const express = require('express');
const app = express();


/* mongoose.connect('mongodb://localhost/okestra')
    .then(() => console.log('Connected to MongoDb...'))
    .catch(err => console.error('Could not connect to MongoDb', err));
 */

app.use('/', home);
app.use('/api/courses', courses);// for any route that starts with /api/courses use the courses router

// Initialize the app
var port = process.env.PORT || 3000 ; 
app.listen(port, () => {
    if (app.get('env') === 'development') {
        console.log(`App now running on port ${port}`)
    }
});

module.exports = app;