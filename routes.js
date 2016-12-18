var express = require("express");
var router = express.Router();
var time = require("./helpers").time;
var db = require("./queries");

if (process.env.NODE_ENV === 'development'){
  router.use(function(req, res, next){
    var d = new Date();
    var connection = req.connection.remoteAddress.split(":");
    var connectionString = connection[connection.length - 1];
    console.log("%s - %s - %s => %s", connectionString, time.currentTime(d), req.url, req.method);
    next();
  });
}

router.route('/tasks/completed')
  .get(db.getCompletedTasks);

router.route('/tasks/active')
  .get(db.getActiveTasks)
  .post(db.createTask);

router.route('/tasks/active/:id')
  .get(db.getSingleTask)
  .put(db.updateTask);
  
router.route("/tasks/:id")
  .get(db.getSingleTask)
  .put(db.updateTask)
  .delete(db.removeTask);
  
router.route("/users")
  .post(db.createUser)
  .get(db.getAllUsers);
  
router.route('/users/:id')
  .get(db.getSingleUser)
  .put(db.updateUser)
  .delete(db.removeUser);
  

module.exports = router;