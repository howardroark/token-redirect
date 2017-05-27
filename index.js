var express = require('express');
var request = require('request');

var app = express();

app.get('/:account/:project', function (req, res) {
    var code = req.params.code;
    var account = req.params.account;
    var project = req.params.project;
    var token;
    
    request.post(
        'https://github.com/login/oauth/access_token',
        {
            client_id: process.env.GITHUB_CLIENT_ID,
            client_secrent: process.env.GITHUB_CLIENT_SECRET,
            code: code
        },
        function (err, response) {
            console.log(response);
        }
    );

    res.redirect('https://' + account + '.github.io/' + project + '/#access_token=' + token);
});

app.listen(process.env.PORT || 3000);
