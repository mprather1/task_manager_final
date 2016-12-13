var Task = require("../models/Task");

var ActiveTasks = Backbone.Collection.extend({
  
  model: Task,
  
  url: "http://shintech.ninja:8000/api/tasks/active"

});

module.exports = ActiveTasks;
