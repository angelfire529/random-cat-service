var express = require('express')
var request = require('request');
var app = express();

app.enable("trust proxy");

function removeHTTPS(req, res, next) {
    if (!req.secure && req.get('x-forwarded-proto') !== 'http') {
        return res.redirect('http://' + req.get('host') + req.url);
    }
}

// app.use(removeHTTPS)


app.get('/api/cat', function(req, res) {
    res.json('hello')
    // request.get('http://aws.random.cat/meow', function (error, resp, body) {
    //     if (!error) {
    //         const response = JSON.parse(body).file;
    //        res.json(response);
    //     }
    //     else 
    //     res.json(error);
    // })
});

var server = app.listen(5000, function(req, res) {
    const port = server.address().port;
    console.log('server is running on port: ', port);
})
