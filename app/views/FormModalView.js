var Task = require("../models/Task");
var UsersView = require("./UsersView");

var FormModalView = Backbone.Marionette.View.extend({
  tagName: 'div',
  
  id: 'form-modal',
  
  className: 'modal fade',
  
  template: require("../templates/form-modal-view-template.html"),
  
  events: {
    'click .submit-button': 'submitForm',
  },
  
  regions: {
    userRadio: {
      el: '#assigned_to_input',
      replaceElement: true
    }
  },
  
  initialize: function(options){
    this.users = options.users
  },
  
  onRender: function(){
    this.$el.modal('show');
    this.showChildView('userRadio', new UsersView({
      collection: this.users
    }))
    window.history.back();
  },
  
  submitForm: function(e){
    e.preventDefault();
    var items = []
    var task = new Task();
    var taskAttrs = {
      item_number: $('#item_number_input').val(),
      location_number: $('#location_number_input').val(),
      project: $('[name="project-radio"]:radio:checked').val(),
      description: $('#description_input').val(),
      priority: $('[name="priority-radio"]:radio:checked').val(),
      requestor: $('#requestor_input').val(),
      assigned_to: $('input[name="assigned-radio"]:radio:checked').val(),
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
    this.collection.fetch();
    Backbone.history.navigate('tasks/active', { trigger: true });
  }
  
});

module.exports = FormModalView;