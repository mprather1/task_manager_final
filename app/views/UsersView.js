var UserView = require("./UserView");

var UsersView = Backbone.Marionette.CollectionView.extend({
  tagName: 'label',
  className: 'radio-inline',
  childView: UserView
});

module.exports = UsersView;