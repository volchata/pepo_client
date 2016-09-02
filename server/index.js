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
    request = require('request'),

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

app.get('/ping/', function (req, res) {
    res.send('ok');
});

app.get('/users/:login', function (req, res) {
    var cookie = request.cookie('connect.sid=' + req.cookies['connect.sid']),
        url = config.servers.api_server + '/api/users/' + encodeURIComponent(req.params.login);
    request({
        url: url,
        headers: {
            Cookie: cookie,
            json: true
        }
    }, function (error, response, answer) {
        answer = JSON.parse(answer);

        if (response.statusCode == 403) {
            res.redirect('/auth/');
        }
        else {

            if (answer) {
                if(response.statusCode != 404){
                    render(req, res, {
                        view: 'profile',
                        title: 'Profile  Page',
                        profile_data: answer
                    })
                }else{
                    res.status(404);
                    return render(req, res, { view: '404' });
                }

            }
            else {
                render(req, res, {
                    view: '500',
                    title: ''
                })
            }

        }
    });
});

app.get('/tweet/:id', function (req, res) {
    var cookie = request.cookie('connect.sid=' + req.cookies['connect.sid']),
        url = config.servers.api_server + '/api/tweet/' + req.params.id;

    request({
        url: url,
        headers: {
            Cookie: cookie,
            json: true
        }
    }, function (error, response, answer) {
        answer = JSON.parse(answer);

        if (response.statusCode == 403) {
            res.redirect('/auth/');
        }
        else {
            if (answer) {
                render(req, res, {
                    view: 'tweet',
                    title: 'Tweet  Page',
                    tweet_data: answer
                })
            }
            else {
                render(req, res, {
                    view: '500',
                    title: ''
                })
            }

        }
    });
});

app.get('/', function (req, res) {
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
app.get('/feed/', function (req, res) {
    var cookie = request.cookie('connect.sid=' + req.cookies['connect.sid']);
    var url = config.servers.api_server + '/api/user/feed';

    request({
        url: url,
        headers: {
            Cookie: cookie,
            json: true
        }
    }, function (error, response, answer) {
        answer = JSON.parse(answer);

        if (response.statusCode == 403) {
            res.redirect('/auth/');
        }
        else {
            if (answer) {
                render(req, res, {
                    view: 'wall',
                    title: 'Wall Page',
                    tweet_data: answer
                })
            }
            else {
                render(req, res, {
                    view: '500',
                    title: ''
                })
            }

        }
    });
});

app.get('/login/', function (req, res) {
    render(req, res, {
        view: 'login',
        title: 'Login  Page'
    })
});

app.get('/auth/', function (req, res) {
    var cookie = request.cookie('connect.sid=' + req.cookies['connect.sid']);
    var url = config.servers.api_server + '/api/user/';

    request({
        url: url,
        headers: {
            Cookie: cookie,
            json: true
        }
    }, function (error, response, answer) {
        answer = JSON.parse(answer);
        if (response.statusCode == 403) {
            render(req, res, {
                view: 'auth',
                title: 'Auth  Page'
            })
        }
        else {
            if (answer.notRegistered) {
                res.redirect('/signup/');
            }
            else {
                res.redirect('/feed/');
            }

        }
    });

});

app.get('/signup/', function (req, res) {

    var cookie = request.cookie('connect.sid=' + req.cookies['connect.sid']);
    var url = config.servers.api_server + '/api/user/';

    request({
        url: url,
        headers: {
            Cookie: cookie,
            json: true
        }
    }, function (error, response, answer) {
        answer = JSON.parse(answer);
        if (response.statusCode == 403) {
            res.redirect('/auth/');
        }
        else {
            if (answer.notRegistered) {
                render(req, res, {
                    view: 'signup',
                    title: 'Signup Page'
                });
            }
            else {
                res.redirect('/feed/');
            }
        }
    });

});

app.get('/comment/', function (req, res) {
    render(req, res, {
        view: 'comment',
        title: 'comment'
    })
});

app.get('/profile-edit/', function (req, res) {

    var cookie = request.cookie('connect.sid=' + req.cookies['connect.sid']);
    var url = config.servers.api_server + '/api/user/';

    request({
        url: url,
        headers: {
            Cookie: cookie,
            json: true
        }
    }, function (error, response, answer) {
        answer = JSON.parse(answer);

        if (response.statusCode == 403) {
            res.redirect('/auth/');
        }
        else {
            if (answer) {
                answer.self = true;
                render(req, res, {
                    view: 'profile-edit',
                    title: 'Edit Profile  Page',
                    profile_data: answer
                })
            }
            else {
                render(req, res, {
                    view: '500',
                    title: ''
                })
            }

        }
    });
});

app.get('/profile/', function (req, res) {

    var cookie = request.cookie('connect.sid=' + req.cookies['connect.sid']);
    var url = config.servers.api_server + '/api/user/';

    request({
        url: url,
        headers: {
            Cookie: cookie,
            json: true
        }
    }, function (error, response, answer) {
        answer = JSON.parse(answer);

        if (response.statusCode == 403) {
            res.redirect('/auth/');
        }
        else {
            if (answer) {
                answer.self = true;
                render(req, res, {
                    view: 'profile',
                    title: 'Profile  Page',
                    profile_data: answer
                })
            }
            else {
                render(req, res, {
                    view: '500',
                    title: ''
                })
            }

        }
    });
});



app.get('/compose/', function (req, res) {
    render(req, res, {
        view: 'compose',
        title: 'Compose new tweet message'
    })
});

app.get('/users-search/', function(req, res) {
    render(req, res, {
        view: 'users-search',
        title: 'Users Search'
    })
});

app.get('/image-upload/', function(req, res) {
    render(req, res, {
        view: 'image-upload',
        title: 'Image upload'
    })
});

app.get('*', function(req, res) {
    res.status(404);
    return render(req, res, { view: '404' });
});

if (isDev) {
    app.get('/error/', function () {
        throw new Error('Uncaught exception from /error');
    });

    app.use(require('errorhandler')());
}

isSocket && fs.existsSync(port) && fs.unlinkSync(port);

app.listen(port, function () {
    isSocket && fs.chmod(port, '0777');
    console.log('server is listening on', this.address().port);
});
