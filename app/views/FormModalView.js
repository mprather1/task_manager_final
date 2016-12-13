var FormModalView = Backbone.Marionette.View.extend({
  tagName: 'div',
  id: 'form-modal',
  className: 'modal fade',
  template: require("../templates/form-modal-view-template.html"),
  initialize: function(){
    this.render();
    this.on('hidden', window.history.back())
  },
  onRender: function(){
    if ($('#form-modal').length){
      $('#form-modal').remove()
    }
    if ($('.modal-backdrop').length){
      $('.modal-backdrop').remove()
    }
    this.$el.modal('show');
  }
});

module.exports = FormModalView;