var TaskModalView = Backbone.Marionette.View.extend({
  tagName: 'div',
  id: 'task-modal',
  className: 'modal fade',
  template: require("../templates/task-modal-view-template.html"),
  initialize: function(){
    this.render();
  },
  onRender: function(){
    if ($('#task-modal').length){
      $('#task-modal').remove();
    }
    if ($('.modal-backdrop').length){
      $('.modal-backdrop').remove();
    }
    this.$el.modal('show');
  }
});

module.exports = TaskModalView;