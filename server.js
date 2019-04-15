var express = require('express')
var request = require('request');
var app = express();

app.enable("trust proxy");

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})

app.get('/', function (req, res) {
     res.json({'greeting': 'hello'})
})

app.get('/api/cat', function(req, res) {
   
    request.get('http://aws.random.cat/meow', function (error, resp, body) {
        if (!error) {
            const response = JSON.parse(body).file;

           res.json(response);
        }
        else 
        res.json(error);
    })
});

var server = app.listen(process.env.PORT || 5001, function(req, res) {
    const port = server.address().port;
    console.log('server is running on port: ', port);
})
