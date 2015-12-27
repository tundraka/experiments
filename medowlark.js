var express = require('express');
var handlebars = require('express-handlebars').create({defaultLayout: 'main'});
var app = express();

app.engine('handlebars', handlebars.engine);

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
    // no status since express defaults to 200
    res.type('text/plain');
    res.send('Medowlark travel');
});

app.get('/about', function(req, res) {
    res.type('text/plain');
    res.send('About');
});

// 404
app.use(function(req, res, next) {
    res.type('text/plain');
    res.status(404);
    res.send('404: Not found');
});

// 500
app.use(function(err, req, res, next) {
    console.log(err);

    res.type('text/plain');
    res.status(500);
    res.send('500: Internal server error');
});

app.listen(app.get('port'), function() {
    console.log('Express running on :3000, ctrl-c to stop.');
});
