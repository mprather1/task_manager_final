var promise = require('bluebird');
var options = {
  promiseLib: promise
};
var config = require("./_config");
var environment = process.env.NODE_ENV || 'development';
var pgp = require("pg-promise")(options);
var connectionString = config.postgresURI[environment];
var db = pgp(connectionString);

var database_name = connectionString.split('/');
console.log("Connected to database: " + database_name[database_name.length - 1])

function getAllTasks(req, res, next){
  db.any('select * from tasks')
  .then(function(data){
    res.status(200)
    .json(data);
  })
  .catch(function(err){
    return next(err);
  });  
}

function getCompletedTasks(req, res, next){
  db.any('select * from tasks where completed=true')
  .then(function(data){
    res.status(200)
    .json(data);
  })
  .catch(function(err){
    return next(err);
  });  
}

function getActiveTasks(req, res, next){
  db.any('select * from tasks where completed=false')
 .then(function(data){
    res.status(200)
    .json(data);
  })
  .catch(function(err){
    return next(err);
  });
}

function getSingleTask(req, res, next){
  var taskID = parseInt(req.params.id);
  db.one('select * from tasks where id = $1', taskID)
    .then(function(data){
      res.status(200)
       .json(data);
    })
    .catch(function(err){
      return next(err);
    });
}

function createTask(req, res, next){
  db.none('insert into tasks(name)' + 'values(${name})', req.body)
  .then(function(){
    res.status(200)
      .json({
        status: 'success',
        message: 'Inserted ONE task'
      });
  })
  .catch(function(err){
    return next(err);
  });
}

function updateTask(req, res, next){
  db.none('update tasks set name=$1 where id=$2', [req.body.name, parseInt(req.params.id)])
    .then(function(){
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated task'
        });
    })
    .catch(function(err){
      return next(err);
    });
}

function removeTask(req, res, next){
  var taskID = parseInt(req.params.id);
  db.result('delete from tasks where id = $1', taskID)
    .then(function(result){
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} task`
        });
    })
    .catch(function(err){
      return next(err);
    });
}

module.exports = {
  getAllTasks: getAllTasks,
  getCompletedTasks: getCompletedTasks,
  getActiveTasks: getActiveTasks,  
  getSingleTask: getSingleTask,
  createTask: createTask,
  updateTask: updateTask,
  removeTask: removeTask

};