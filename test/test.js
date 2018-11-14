const request = require('supertest');
const app = require('../index.js');
describe('GET /', function () {
    it('respond with Welcome To Sitovu', function(done) {
            //navigate to root and check the the response is "hello world"
        request(app).get('/').expect('Welcome To Sitovu', done);
 });
});

