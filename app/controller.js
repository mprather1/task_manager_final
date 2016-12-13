var Marionette = require('marionette');
var ActiveTasks = require("./collections/ActiveTasks");
var CompletedTasks = require("./collections/CompletedTasks");
var TasksView = require("./views/TasksView");
var TableView = require("./views/TableView");
var FormModalView = require("./views/FormModalView");
var style = require("./public/css/style.scss");

var Controller = Marionette.Object.extend({
  
  initialize: function(options){
    
    this.app = options.app;
    
    var activeTasks = new ActiveTasks();
    var completedTasks = new CompletedTasks();
    var tasksView = new TasksView();
    var tableView = new TableView();
    var formModalView = new FormModalView();

    activeTasks.fetch({
      success: function(request, response){
        console.log("Successfully fetched active tasks...");
      },
      error: function(err){
        console.log("Error: " + err);
      }
    });
    
    completedTasks.fetch({
      success: function(request, response){
        console.log("Successfully fetched completed tasks...");
      },
      error: function(err){
        console.log("Error: " + err);
      }
    });
    
    this.options.activeTasks = activeTasks;
    this.options.completedTasks = completedTasks;
    this.options.formModalView = formModalView;
    this.options.tableView = tableView;
    this.app.view.showChildView('main', this.options.tableView);
    this.options.formModalView.collection = this.options.activeTasks;
    
  },
  
  active: function(){
    this.options.tableView.showChildView('body', new TasksView({ collection: this.options.activeTasks }));
  },
  
  completed: function(){
    this.options.tableView.showChildView('body', new TasksView({ collection: this.options.completedTasks }));
  },
  
  newTask: function(){
    this.options.formModalView.render();
  }
  
});

module.exports = Controller;
