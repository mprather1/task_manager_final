var TaskModalView = Backbone.Marionette.View.extend({
  
  tagName: 'div',
  
  id: 'task-modal',
  
  className: 'modal fade',
  
  template: require("../templates/task-modal-view-template.html"),
  
  events: {
    'click .complete-button': 'completeTask'
  },
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
  },
  
  completeTask: function(e){
    e.preventDefault();
    this.model.set("completed", true);
    this.model.save(null, {
      success: function(model, response){
        console.log(response.message);
      }
    });
    this.model.collection.remove(this.model)
  }
  
});

module.exports = TaskModalView;