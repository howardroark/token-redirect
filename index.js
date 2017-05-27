var express = require('express');

var app = express();

app.get('/:account/:project', function (req, res) {
    var code = req.params.code;
    var account = req.params.account;
    var project = req.params.project;
    var token;
    
    res.redirect('https://' + account + '.github.io/' + project + '/#access_token=' + token);
});

app.listen(process.env.PORT || 3000);
