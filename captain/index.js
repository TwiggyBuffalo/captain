var chalk = require('chalk');
var onFinished = require('on-finished');

var informational = chalk.blue.bold;
var success = chalk.green.bold;
var redirection = chalk.yellow.bold;
var client = chalk.hex('#ff0000').bold;
var server = chalk.bold.red.bold;

function logRequest(err, res, next){
  var req = res.req;
  var statusCode = res.statusCode;
  var timestamp = new Date();
  var urlValue = 65 -  req.path.length;
  var urlPadding = "";
  for(var i = 0; i < urlValue; i++ ){
    urlPadding += " ";
  }
  var method = req.method;
  var styles;
  switch (true) {
    case (statusCode > 0 && statusCode < 200):
      styles = informational;
      break;
    case (statusCode > 199 && statusCode < 300):
      styles = success;
      break;
    case (statusCode > 299 && statusCode < 400):
      styles = redirection;
      break;
    case (statusCode > 399 && statusCode < 500):
      styles = client;
      break;
    case (statusCode >= 500):
      styles = server;
      break;
    default:
      styles = server;
  }
  var methodValue = 6 - method.length;
  var methodPadding = "";
  for(var i = 0; i < methodValue; i++ ){
    methodPadding += " ";
  }
  console.log(styles(statusCode + "    :::    " + method + methodPadding + "    :::    " + req.path + urlPadding + "    :::    " + timestamp));
}

function captain(req, res, next) {
  onFinished(res, logRequest)
  next()
}

module.exports = captain