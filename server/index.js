Object.assign || (Object.assign = require('object-assign'));

var fs = require('fs'),
    path = require('path'),
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    favicon = require('serve-favicon'),
    morgan = require('morgan'),
    serveStatic = require('serve-static'),
    cookieParser = require('cookie-parser'),
//    expressSession = require('express-session'),
    slashes = require('connect-slashes'),
//    passport = require('passport'),
//    LocalStrategy = require('passport-local').Strategy,

    config = require('./config'),
    staticFolder = config.staticFolder,

    Render = require('./render'),
    render = Render.render,
    dropCache = Render.dropCache,

    port = process.env.PORT || config.defaultPort,
    isSocket = isNaN(port),
    isDev = process.env.NODE_ENV === 'development';

app
    .disable('x-powered-by')
    .enable('trust proxy')
    .use(favicon(path.join(staticFolder, 'favicon.ico')))
    .use(serveStatic(staticFolder))
    .use(morgan('combined'))
    .use(cookieParser())
    .use(bodyParser.urlencoded({ extended: true }))
//    .use(expressSession({
//        resave: true,
//        saveUninitialized: true,
//        secret: config.sessionSecret
//    }))
//    .use(passport.initialize())
//    .use(passport.session())
    .use(slashes());
    // TODO: csrf, gzip

//passport.serializeUser(function(user, done) {
//    done(null, JSON.stringify(user));
//});

//passport.deserializeUser(function(user, done) {
//    done(null, JSON.parse(user));
//});

app.get('/ping/', function(req, res) {
    res.send('ok');
});

app.get('/', function(req, res) {
    render(req, res, {
        view: 'index',
        title: 'Main page',
        meta: {
            description: 'Page description',
            og: {
                url: 'https://site.com',
                siteName: 'Site name'
            }
        }
    })
});

// Новая страница - новый роут
app.get('/wall/', function(req, res) {
    render(req, res, {
        view: 'wall',
        title: 'Wall Page'
    })
});

app.get('/login/', function(req, res) {
    render(req, res, {
        view: 'login',
        title: 'Login  Page'
    })
});

app.get('/auth/', function(req, res) {
    render(req, res, {
        view: 'auth',
        title: 'Auth  Page'
    })
});

app.get('/profile/', function(req, res) {
    render(req, res, {
        view: 'profile',
        title: 'Profile  Page',
        myData: '[{"_id":"57b6cbd6431d668671cee0a5","userName":"Bob Alacaaahdgejh Moidusen","userID":"129220154191712","provider":"fb","__v":0}]'
    })
});

app.get('/compose/', function(req, res) {
    render(req, res, {
        view: 'compose',
        title: 'Compose new tweet message'
    })
});

app.get('*', function(req, res) {
    res.status(404);
    return render(req, res, { view: '404' });
});

if (isDev) {
    app.get('/error/', function() {
        throw new Error('Uncaught exception from /error');
    });

    app.use(require('errorhandler')());
}

isSocket && fs.existsSync(port) && fs.unlinkSync(port);

app.listen(port, function() {
    isSocket && fs.chmod(port, '0777');
    console.log('server is listening on', this.address().port);
});
