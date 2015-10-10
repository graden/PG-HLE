var express       = require('express');
var cookieParser  = require('cookie-parser');
var favicon       = require('serve-favicon');
var bodyParser    = require('body-parser');
var url           = require('url');
var config        = require('./config');
var session       = require('express-session');
var ejsTemplate   = require('ejs-locals');

var port = config.get('server:port');
var app = express();


app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(session({
    secret: config.get('session:secret'),
    key: config.get('session:key'),
    cookie: config.get('session:cookie'),
    proxy: true,
    resave: true,
    saveUninitialized: true
}));

app.listen(port, function(){
    console.log('%s - %s: %s','Server','Starting the server on port',port);
});

app.engine('ejs', ejsTemplate);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/vendor'));

app.get('/', require('./routes/homes').startPage);


