var Marionette = require('marionette');
var RootView = require("./views/RootView");
var Router = require("./router");

var App = Marionette.Application.extend({
  
  region: '#main',
  
  onStart: function(){
    this.view = new RootView();
    this.showView(this.view);
    this.Router = new Router({ app: this });
    Backbone.history.start();
  }
  
});

module.exports = App;