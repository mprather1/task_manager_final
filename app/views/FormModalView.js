var FormModalView = Backbone.Marionette.View.extend({
  tagName: 'div',
  id: 'form-modal',
  className: 'modal fade',
  template: require("../templates/form-modal-view-template.html"),
  onRender: function(){
    this.$el.modal('show');
    window.history.back();
  }
});

module.exports = FormModalView;