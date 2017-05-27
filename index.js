var express = require('express');

var app = express();

app.get('/:account/:project', function (req, res) {
    res.redirect('https://' + req.params.account + '.github.io/' + req.params.project);
});

app.listen(process.env.PORT || 3000);
