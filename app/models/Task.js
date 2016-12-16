var validation = require("backbone.validation");

var Task = Backbone.Model.extend({
  
  urlRoot: "http://shintech.ninja:8000/api/tasks/active",
  
  validation: {
    item_number: {
      required: true
    },
    location_number: {
      required: true
    },
    description: {
      required: true
    },
    project: {
      required: true
    },
    description: {
      required: true
    },
    priority: {
      required: true
    },
    requestor: {
      required: true
    },
    assigned_to: {
      required: true
    },
    due_date: {
      required: true
    },
    notes: {
      required: true
    }
  }

});

module.exports = Task;
