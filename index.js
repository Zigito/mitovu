var express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://kogoradev:/79Uc^7P&==G6\'Z@206.189.17.119:27017/mitovu')
    .then(() => console.log('Connected to MongoDb...'))
    .catch(err => console.error('Could not connect to MongoDb', err));

//defines the shape of course documents
const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        minlength: 5,
        maxlength: 255,
        trim: true
        //match: //pattern
    },
    author: String,
    tags: {
        type: Array,
        validate: {
            isAsync: true,
            validator: function (v, callback) {
                setTimeout(() => {
                    //do some async work
                    const result = v && v.length > 0;
                    callback(result)
                }, 1);
            },
            message: 'A course should have at least one tag'
        }
    },
    category: {
        type: String,
        required: true,
        enum: ['elementary', 'middle', 'high'],
        lowercase: true,
        //uppercase: true,
        trim: true
    },
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: {
        type: Number,
        required: function () { return this.isPublished; },        //price is only required if if published is true
        min: 10,
        max: 200,
        get: v => Math.round(v),//custom getter
        set: v => Math.round(v)
    },

});

//create the data model
const Course = mongoose.model('Course', courseSchema);
const course = new Course({
    name: 'Algebra',
    author: 'Osagie',
    category: 'middle',
    tags: ['conceptual', 'stem'],
    isPublished: true,
    price: 30.50
});

try {
    const result = await course.save();
    console.log(result);
}
catch (ex) {
    //iterating over the validation error object
    for (field in ex.errors)
        console.log(ex.errors[field].message);
    //console.log(ex.message);
}


var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
    res.send('Mitovu App');
});
//listen to port 3000 by default
app.listen(process.env.PORT || 3000);

module.exports = app;

