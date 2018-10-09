
const express = require('express');
const app = express();

//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('Mitovu App');
});

app.get('/api/courses', async (req, res) => { 
    res.send({
        courses: [{'name' : 'Algebra'}, {'name': 'Geometry'}, {'name': 'Calculus'}]
    });
});


app.post('/api/courses', async (req, res) => {
    //const { error } = validate(req.body);
   // if (error) return res.status(400).send(error.details[0].message);

    //let course = { name: req.body.name };
   //s course = await course.save();

    res.send('hello');
});

//listen to port 3000 by default
app.listen(process.env.PORT || 3000);

module.exports = app;