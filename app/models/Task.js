var Task = Backbone.Model.extend({
  
  urlRoot: "http://shintech.ninja:8000/api/tasks/active"

});

module.exports = Task;
