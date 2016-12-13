var TableView = Backbone.Marionette.View.extend({
  tagName: 'table',
  template: require("../templates/table-view-template.html"),
  className: 'table table-hover',
  regions: {
    body: {
      el: 'tbody',
      replaceElement: true
    }
  },
  events: {
    'mouseover .table-header': 'mouseoverHeader',
    'mouseout .table-header': 'mouseoutHeader',
    'mouseover .table-row': 'mouseoverRow',
    'mouseout .table-row': 'mouseoutRow',
  },
  mouseoverHeader: function(event){
    $(event.currentTarget).css({"background-color":"lightgrey","cursor":"pointer"});
  },
  mouseoutHeader: function(event){
    $(event.currentTarget).css("background-color", "rgb(231, 231, 230)");
  },
  mouseoverRow: function(event){
    $(event.currentTarget).css({"background-color":"rgb(255, 255, 117)","cursor":"pointer"});
  },
  mouseoutRow: function(event){
    $(event.currentTarget).css("background-color", "");
  }
});

module.exports = TableView;