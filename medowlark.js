var express = require('express');
// To set the extension to .hbs:
// https://github.com/ericf/express-handlebars#extnamehandlebars
var handlebars = require('express-handlebars').create({
    defaultLayout: 'main',
    extname: '.hbs'
});
var fortune = require('./lib/fortune');
var app = express();

app.set('port', process.env.PORT || 3000);

// And from the note in github:
// "Setting the app's "view engine" setting will make that value the default
// file extension used for looking up views."
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs'); // and here too.
//app.set('view cache');

// static middleware
app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
    res.locals.showTests = app.get('env') !== 'production' && 
        req.query.test === '1';
    next();
});

app.get('/', function(req, res) {
    // no status since express defaults to 200
    res.render('home', {
        title: 'Medowlark: home',
    });
});

app.get('/about', function(req, res) {
    res.render('about', {
        title: 'Medowlark: about',
        fortune: fortune.getFortune(),
        pageTestScript: '/qa/about.js'
    });
});

// 404
app.use(function(req, res, next) {
    res.status(404);
    res.render('404');
});

// 500
app.use(function(err, req, res, next) {
    console.log(err);

    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function() {
    console.log('Express running on :3000, ctrl-c to stop.');
});
