var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require('../server');
var expect = chai.expect;
var db = require("../queries").db;


chai.use(chaiHttp);

describe("Clear tasks...", function(done) {
  
  beforeEach(function(done){
    db.none('TRUNCATE tasks RESTART IDENTITY');
    done();
  });
  
  it('should not see data', function(done) {
    db.any('select * from tasks')
    .then(function(data){
      expect(data).to.deep.equal([]);
      }).then(done, done);
  });
});

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
        expect(res.body[0]).to.have.property('id');
        expect(res.body[0]).to.have.property('location_number');
        expect(res.body[0]).to.have.property('project');
        expect(res.body[0]).to.have.property('description');
        expect(res.body[0]).to.have.property('priority');
        expect(res.body[0]).to.have.property('requestor');
        expect(res.body[0]).to.have.property('assigned_to');
        expect(res.body[0]).to.have.property('due_date');
        expect(res.body[0]).to.have.property('notes');
        expect(res.body[0].completed).to.be.false;        
        done();
      });
  });
  
  it('should update a SINGLE active task to completed on /tasks/active PUT', function(done) {
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
  
  it('should list a SINGLE active task on /task/active/:id GET', function(done) {
    chai.request(server)
      .get('/api/tasks/active/1')
      .end(function(err, res){
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res).to.be.a('object');
        expect(res.body).to.have.property('id');
        expect(res.body).to.have.property('location_number');
        expect(res.body).to.have.property('project');
        expect(res.body).to.have.property('description');
        expect(res.body).to.have.property('priority');
        expect(res.body).to.have.property('requestor');
        expect(res.body).to.have.property('assigned_to');
        expect(res.body).to.have.property('due_date');
        expect(res.body).to.have.property('notes');
        expect(res.body.completed).to.be.true;
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
        expect(res.body[0]).to.have.property('id');
        expect(res.body[0]).to.have.property('location_number');
        expect(res.body[0]).to.have.property('project');
        expect(res.body[0]).to.have.property('description');
        expect(res.body[0]).to.have.property('priority');
        expect(res.body[0]).to.have.property('requestor');
        expect(res.body[0]).to.have.property('assigned_to');
        expect(res.body[0]).to.have.property('due_date');
        expect(res.body[0]).to.have.property('notes');
        expect(res.body[0].completed).to.be.true;
        done();
      });
  });
  
   
  it('should delete a SINGLE task on /tasks/:id DELETE', function(done) {
    chai.request(server)
      .get("/api/tasks/completed")
      .end(function(err, res) {
        chai.request(server)
          .delete("/api/tasks/" + res.body[0].id )
          .end(function(error, response){
            expect(response).to.have.status(200);
            expect(response).to.be.json;
            expect(response.body).to.be.a('object');
            expect(response.body).to.have.status('success');
            done();
          });
      });
  });
});