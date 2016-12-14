var TaskView = require("./TaskView");
var TaskModalView = require("./TaskModalView");

var TasksView = Backbone.Marionette.CollectionView.extend({
  
  tagName: 'tbody',
  
  initialize: function(options){
    this.completedTasks = options.completedTasks
    this.listenTo(this.collection, 'sync', this.render);
  },
  
  childView: TaskView,
  
  ui: {
    tableRowClicker: '.table-row',
  },
  
  events: {
    'click @ui.tableRowClicker': 'handleClick',
  },
  
  handleClick: function(e){
    var id = $(e.currentTarget).data("id");
    var task = this.collection.get(id);
    var taskModalView = new TaskModalView({ model: task, completedTasks: this.completedTasks });
  }

});

module.exports = TasksView;