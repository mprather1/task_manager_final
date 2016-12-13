var Task = require("../models/Task");

var FormModalView = Backbone.Marionette.View.extend({
  tagName: 'div',
  
  id: 'form-modal',
  
  className: 'modal fade',
  
  template: require("../templates/form-modal-view-template.html"),
  
  events: {
    'click .submit-button': 'submitForm',
  },
  
  onRender: function(){
    this.$el.modal('show');
    window.history.back();
  },
  
  submitForm: function(e){
    e.preventDefault();
    var task = new Task();
    var taskAttrs = {
      item_number: $('#item_number_input').val(),
      location_number: $('#location_number_input').val(),
      project: $('[name="project-radio"]:radio:checked').val(),
      description: $('#description_input').val(),
      priority: $('[name="priority-radio"]:radio:checked').val(),
      requestor: $('#requestor_input').val(),
      assigned_to: $('#assigned_to_input').val(),
      due_date: $('#due_date_input').val(),
      notes: $('#notes_input').val()
    };
    task.set(taskAttrs);
    task.save(null, {
      success: function(model, response){
        console.log(response.message);
      }
    });
    this.collection.add(task);
  }
  
});

module.exports = FormModalView;