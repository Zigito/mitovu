const request = require('supertest');
const app = require('../index.js');
describe('GET /', function () {
        it('respond with Mitovu to the world', function(done) {
            //navigate to root and check the the response is "hello world"
            request(app).get('/').expect('Mitovu to the world', done);
 });
});