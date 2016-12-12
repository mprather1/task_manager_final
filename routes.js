var express = require("express");
var router = express.Router();

var db = require("./queries");

router.use(function(req, res, next){
  console.log("%s %s - %s", (new Date).toString(), req.method, req.url);
  next();
});

router.route("/tasks")
  .get(db.getAllTasks)
  .post(db.createTask)

router.route("/tasks/:id")
  .get(db.getSingleTask)
  .put(db.updateTask)
  .delete(db.removeTask)

module.exports = router;