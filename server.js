var express = require("express");
var captain = require("./captain")

var app = express();

var port = process.env.PORT || 9000;

app.use(captain);

app.get("/", function(req, res){
  res.send("Hello World")
})

app.listen(port, function(){
  console.log("Server is running on port " + port);
});