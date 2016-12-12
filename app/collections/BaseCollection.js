var BaseModel = require("../models/BaseModel");

var BaseCollection = Backbone.Collection.extend({
  model: BaseModel,
  url: "http://shintech.ninja:8000/api/models"
});

module.exports = BaseCollection;