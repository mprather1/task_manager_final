var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require('../server');
var expect = chai.expect;

chai.use(chaiHttp);

describe('Users', function(){

  it('should add a SINGLE user on /users POST', function(done) {
    chai.request(server)
    .post('/api/users')
    .send({"first_name":"name", "last_name":"name", "email":"email", "password":"passweord"})
    .end(function(err, res){
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.have.status('success');
      done();
    });
  });
  
  it('should list ALL users on /users GET', function(done){
    chai.request(server)
      .get('/api/users')
      .end(function(err, res){
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        // expect(res.body.data).to.be.a('array');
        done();
      });
  });
  
  it('should list a SINGLE user on /user/:id GET', function(done) {
    chai.request(server)
      .get('/api/users/1')
      .end(function(err, res){
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res).to.be.a('object');
        done();
      });    
  });
 
  it('should update a SINGLE user on /users/:id PUT');
  it('should delete a SINGLE user on /users/:id DELETE');
});