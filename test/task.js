var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require('../server');
var expect = chai.expect;

chai.use(chaiHttp);

describe('Tasks', function(){
  
  it('should add a SINGLE task on /tasks POST', function(done) {
    chai.request(server)
    .post('/api/tasks/active')
    .send({"item_number":52, "location_number":234, "project":"task", "description":"Description", "priority":"high", "requestor":"name", "assigned_to":"name", "due_date":"12-10-2016","notes":"note"})
    .end(function(err, res){
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.have.status('success');
      done();
    });
  });
  
  it('should list ALL active tasks on /tasks/active GET', function(done){
    chai.request(server)
      .get('/api/tasks/active')
      .end(function(err, res){
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        done();
      });
  });
  
  it('should list ALL completed tasks on /tasks/completed GET', function(done){
    chai.request(server)
      .get('/api/tasks/completed')
      .end(function(err, res){
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        done();
      });
  });
  
  it('should update a SINGLE task on /tasks PUT', function(done) {
    chai.request(server)
    .put('/api/tasks/active/1')
    .send({"completed":true})
    .end(function(err, res){
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.have.status('success');
      done();
    });
  });
  
  it('should list a SINGLE active task on /task/:id GET', function(done) {
    chai.request(server)
      .get('/api/tasks/active/1')
      .end(function(err, res){
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res).to.be.a('object');
        done();
      });    
  });
  
  it.skip('should delete a SINGLE task on /tasks/:id DELETE', function(done) {
    chai.request(server)
      .get("/api/tasks/active")
      .end(function(err, res) {
        chai.request(server)
          .get("api/tasks/active/1" )
          .end(function(error, response){
            response.should.have.status(200);
            response.should.be.json;
            response.body.should.be.a('object');
            response.body.should.have.property('removed');
            response.body.removed.should.be.a('object');  
            done();
          })
      })
  });
});