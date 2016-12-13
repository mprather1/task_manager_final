var TaskView = Backbone.Marionette.View.extend({
  tagName: 'tr',
  template: require("../templates/task-view-template.html")
});

module.exports = TaskView;