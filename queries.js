var promise = require('bluebird');
var options = {
  promiseLib: promise
};
var config = require("./_config");
var environment = process.env.NODE_ENV || 'development';
var pgp = require("pg-promise")(options);
var connectionString = config.postgresURI[environment];
var db = pgp(connectionString);
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

var database_name = connectionString.split('/');
console.log("Connected to database: " + database_name[database_name.length - 1]);

//Tasks
/////////////////////////////////////////////////////////////////////////////////

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
 db.none('insert into tasks(item_number, location_number, project, description, priority, requestor, assigned_to, due_date, notes)' + 'values(${item_number}, ${location_number}, ${project}, ${description}, ${priority}, ${requestor}, ${assigned_to}, ${due_date}, ${notes})', req.body)
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
  db.none('update tasks set completed=$1 where id=$2', [req.body.completed, parseInt(req.params.id)])
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

//Users
////////////////////////////////////////////////////////////////

function getAllUsers(req, res, next){
  db.any('select * from users')
    .then(function(data){
      res.status(200)
        .json(data);
    })
    .catch(function(err){
      return next(err);
    });
}

function createUser(req, res, next){
  var hash = bcrypt.hashSync(req.body.password, salt);
  db.none('insert into users(first_name, last_name, email, password_hash)' + 'values($1, $2, $3, $4)', [req.body.first_name, req.body.last_name, req.body.email, hash])
  .then(function(){
    res.status(200)
      .json({
        status: 'success',
        message: 'Inserted ONE user'
      });
  })
  .catch(function(err){
    return next(err);
  });
}

function getSingleUser(req, res, next){
  var userID = parseInt(req.params.id);
  db.one('select * from users where id = $1', userID)
    .then(function(data){
      res.status(200)
       .json(data);
    })
    .catch(function(err){
      return next(err);
    });
}

function updateUser(req, res, next){
  var hash = bcrypt.hashSync(req.body.password, salt);
  db.none('update users set password_hash=$1 where id=$2', [hash, parseInt(req.params.id)])
  .then(function(){
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated user'
        });
    })
    .catch(function(err){
      return next(err);
    });
}

function removeUser(req, res, next){
  var userID = parseInt(req.params.id);
  db.result('delete from users where id = $1', userID)
    .then(function(result){
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} user`
        });
    })
    .catch(function(err){
      return next(err);
    });
}

module.exports = {

//Tasks
  getAllTasks: getAllTasks,
  getCompletedTasks: getCompletedTasks,
  getActiveTasks: getActiveTasks,  
  getSingleTask: getSingleTask,
  createTask: createTask,
  updateTask: updateTask,
  removeTask: removeTask,

//Users  
  getAllUsers: getAllUsers,
  getSingleUser: getSingleUser,
  createUser: createUser,
  updateUser: updateUser,
  removeUser: removeUser,

};