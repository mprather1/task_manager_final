var express = require("express");
var router = express.Router();
var time = require("./helpers").time;
var db = require("./queries");

if (process.env.NODE_ENV !== 'test'){
  router.use(function(req, res, next){
    var d = new Date();
    console.log("%s %s, %s - %s:%s:%s %s - %s => %s", 
    time.month(d),
    time.date(d),
    time.year(d),
    time.hour(d),
    time.minute(d),
    time.second(d),
    time.ampm(d),
    req.url,
    req.method
    );
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