var Task = require("../models/Task");

var CompletedTasks = Backbone.Collection.extend({

  model: Task,

  url: "http://shintech.ninja:8000/api/tasks/completed",
  
  initialize: function(){
    this.listenTo(Backbone, "tasks:completed:fetch", this.fetch)
  }
  
});

module.exports = CompletedTasks;
