var express = require("express");
var app = express();
var path = require("path")
var bodyParser = require("body-parser");
var routes = require("./routes");
var port = process.env.PORT || '8000';
var bcrypt = require('bcryptjs');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'app/static')));

app.use('/api', routes);

var server = app.listen(port, function(){
  console.log("Listening on port " + port + "...");
});

module.exports = server;