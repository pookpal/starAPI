/**
 * Created by lijie on 16/6/15.
 */
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.use('/api', express.static('api'));

app.listen(8888, function () {
    console.log('Example app listening on port 8888!');
});
