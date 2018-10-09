const courses = require('./routes/courses');
const homes = require('./routes/home');

const express = require('express');
const app = express();

app.use('/', home);
app.use('/api/courses', courses);
//Respond with "hello world" for requests that hit our root "/"
/* app.get('/', async (req, res) => {
    res.send('Mitovu to the world');
});

 */

//listen to port 3000 by default
app.listen(process.env.PORT || 3000);

module.exports = app;