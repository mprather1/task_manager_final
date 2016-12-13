var TaskView = Backbone.Marionette.View.extend({
  
  tagName: 'tr',
  
  className: 'table-row',
  
  template: require("../templates/task-view-template.html"),
  
  attributes: function(){
    if (this.model.get('id')){
      return {
        "data-id": this.model.get('id'),
      };
    }
  },
  
  id: function(){
    if (this.options.model.attributes.completed === true){
      return 'completed';
    } else {
      return 'active';
    }
  }
});

module.exports = TaskView;