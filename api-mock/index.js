var express = require('express');
var _ = require('lodash');
var bodyParser = require('body-parser')
var port = 9999;
var accountJSON = require('./account.json');

var args = process.argv.slice(2);
var baseDir = './';
if (args.length > 0) {
   baseDir = args[0];
}
var staticFolder = __dirname;

var app = express();
app.use(express.static(staticFolder));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(function(req, res, next) {
   console.log(new Date() + ', ' + req.method + ', ' + req.url);
   if (!_.isEmpty(req.body)) {
       console.log(req.body);
   }
   next();
});
//CORS middleware
var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
  res.header('Content-Type', 'application/json');
  next();
}
app.use(allowCrossDomain);


// Account
app.get('/account/:id', function(req, res) {
   res.json(_.find(accountJSON, function(account) {
       return account.id == req.params.id;
   }));
});

// Server
var server = app.listen(port, function() {
 var port = server.address().port;
 console.log('Mocked API listening at http://localhost:%s', port);
});
