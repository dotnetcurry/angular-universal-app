var express = require('express');
var app = express();

//to serve static files
app.use(express.static(__dirname + "/dist/browser"));
var port = process.env.PORT || 9511;

//handler if url has api at the begining
app.get('/api/*', function (req, res) {
    res.send('There is no problem to api rest calls until it is defined above the fallback request');
});

//fallback to index.html if resource not found or incase request url doesn't match any listeners
app.use('/*', express.static(__dirname + '/dist/browser/index.html'));

//or
/*app.get('/*', function(req, res){
    res.sendFile(__dirname + '/index.html');
});*/
app.listen(port, function () {
    console.log('Express server started on port : ' + port);
});