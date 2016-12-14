var UserView = Backbone.Marionette.View.extend({
  className: 'radio-inline',
  template: require("../templates/user-view-template.html")
});

module.exports = UserView;