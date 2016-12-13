var TaskView = require("./TaskView");

var TasksView = Backbone.Marionette.CollectionView.extend({
  tagName: 'tbody',
  childView: TaskView
});

module.exports = TasksView;