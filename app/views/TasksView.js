var TaskView = require("./TaskView");
var TaskModalView = require("./TaskModalView");

var TasksView = Backbone.Marionette.CollectionView.extend({
  
  tagName: 'tbody',
  
  initialize: function(options){
    this.completedTasks = options.completedTasks;
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(Backbone, 'tasks:sort', this.sortCollection);
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
    var taskModalView = new TaskModalView({ 
      model: task,
      completedTasks: this.completedTasks
    });
  },
  
  sortCollection: function(options){
    var name = options.target.id;
    if (this.sortFlag === false){
      this.sortFlag = true;
      this.collection.setSorting(name, -1);
      this.collection.fullCollection.sort();
      this.collection.getFirstPage();
    } else {
      this.sortFlag = false;
      this.collection.setSorting(name, 1);
      this.collection.fullCollection.sort();
      this.collection.getFirstPage();
    }
  }  

});

module.exports = TasksView;