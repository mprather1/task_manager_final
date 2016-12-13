var TableView = Backbone.Marionette.View.extend({
  tagName: 'table',
  template: require("../templates/table-view-template.html"),
  className: 'table table-hover',
  regions: {
    body: {
      el: 'tbody',
      replaceElement: true
    }
  }
});

module.exports = TableView;