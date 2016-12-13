var TaskView = Backbone.Marionette.View.extend({
  tagName: 'tr',
  className: 'table-row',
  template: require("../templates/task-view-template.html"),
  attributes: function(){
    return {
    "data-id": this.model.get('id'),
    };
  },
});

module.exports = TaskView;