
import {ApiAiClient} from "api-ai-javascript";



var host = "127.0.0.1";
var port = 8000;
var express = require("express");

var app = express();
app.use('/', express.static('/home/aa/projects/mc_bot/node/'));
app.listen(port, host);

var apiai = require('apiai');

 var app = apiai("<your client access token>");

 var request = app.textRequest('<Your text query>', {
     sessionId: '<unique session id>'
 });

 request.on('response', function(response) {
     console.log(response);
 });

 request.on('error', function(error) {
     console.log(error);
 });

 request.end();
