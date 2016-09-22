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
    bemxjst = require('bem-xjst'),
    bemhtml = bemxjst.bemhtml,
    bemtree = bemxjst.bemtree,

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
    .disable('etag')
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

app.use(function(req, res, next) {
    req.headers['if-none-match'] = 'no-match-for-this';
    next();
});

//passport.serializeUser(function(user, done) {
//    done(null, JSON.stringify(user));
//});

//passport.deserializeUser(function(user, done) {
//    done(null, JSON.parse(user));
//});


app.get('/bemtree/user/feed/history/:timestamp', function (req, res) {
    var cookie = request.cookie('connect.sid=' + req.cookies['connect.sid']);
    var url = config.servers.api_server + '/api/user/feed/history/?offset='  + encodeURIComponent(req.params.timestamp);

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
                /*
                var tmpl = bemtree.compile(
                    fs.readFileSync("./common.blocks/tweet-feed/tweet-feed.bemtree.js")
                );

                data = {
                    tweets: answer.tweets,
                    users: answer.users
                };


                result = tmpl.apply(        {
                    block: 'tweet-feed',
                    data: data,
                    js: data
                });

                res.send(JSON.stringify(result));
                */
                var tmpl = bemtree.compile(
                    fs.readFileSync("./common.blocks/tweet-item/tweet-item.bemtree.js") +
                    fs.readFileSync("./common.blocks/avatar/avatar.bemtree.js") +
                    fs.readFileSync("./common.blocks/tweet-item/__controls/tweet-item__controls.bemtree.js") +
                    fs.readFileSync("./common.blocks/tweet-item/__time/tweet-item__time.bemtree.js") +
                    fs.readFileSync("./common.blocks/tweet-item/__tweet-body/tweet-item__tweet-body.bemtree.js") +
                    fs.readFileSync("./common.blocks/about-user/about-user.bemtree.js")
                );

                var result = [];

                var feed = {
                    tweets: answer.tweets,
                    users: answer.users
                };

                if (feed.tweets)
                {
                    for (var i = 0; i<feed.tweets.length; i++)
                    {
                        var data = {
                            tweet: feed.tweets[i],
                            user: feed.users[feed.tweets[i].author]
                        };
                        result[result.length] = tmpl.apply(        {
                            block: 'tweet-item',
                            data: data,
                            js: data
                        });
                    }
                }

                res.set('Content-Type', 'application/json; charset=utf-8');

                res.send(JSON.stringify(result));
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

app.get('/bemtree/users/search/:query', function (req, res) {
    var cookie = request.cookie('connect.sid=' + req.cookies['connect.sid']);
    var url = config.servers.api_server + '/api/users/' + req.params.query + '/search/';

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

                var tmpl = bemtree.compile(
                    fs.readFileSync("./common.blocks/user-item/user-item.bemtree.js") +
                    fs.readFileSync("./common.blocks/avatar/avatar.bemtree.js") +
                    fs.readFileSync("./common.blocks/about-user/about-user.bemtree.js")
                );

                var result = [];

                var feed = {
                    users: answer
                };

                if (feed.users)
                {
                    for (var i = 0; i < feed.users.length; i++)
                    {

                        var data = {
                            user: feed.users[i]
                        };
                        result[result.length] = tmpl.apply({
                            block: 'user-item',
                            data: data,
                            js: data
                        });

                    }
                }

                res.set('Content-Type', 'application/json; charset=utf-8');

                res.send(JSON.stringify(result));
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

app.get('/bemtree/user/comments/history/:id/:timestamp', function (req, res) {
    var cookie = request.cookie('connect.sid=' + req.cookies['connect.sid']);
    var url = config.servers.api_server + '/api/tweet/' + encodeURIComponent(req.params.id) + '/comments/?offset='  + encodeURIComponent(req.params.timestamp);

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
                /*
                 var tmpl = bemtree.compile(
                 fs.readFileSync("./common.blocks/tweet-feed/tweet-feed.bemtree.js")
                 );

                 data = {
                 tweets: answer.tweets,
                 users: answer.users
                 };


                 result = tmpl.apply(        {
                 block: 'tweet-feed',
                 data: data,
                 js: data
                 });

                 res.send(JSON.stringify(result));
                 */
                var tmpl = bemtree.compile(
                    fs.readFileSync("./common.blocks/tweet-item/tweet-item.bemtree.js") +
                    fs.readFileSync("./common.blocks/avatar/avatar.bemtree.js") +
                    fs.readFileSync("./common.blocks/tweet-item/__controls/tweet-item__controls.bemtree.js") +
                    fs.readFileSync("./common.blocks/tweet-item/__time/tweet-item__time.bemtree.js") +
                    fs.readFileSync("./common.blocks/tweet-item/__tweet-body/tweet-item__tweet-body.bemtree.js") +
                    fs.readFileSync("./common.blocks/about-user/about-user.bemtree.js")
                );

                var result = [];

                var feed = {
                    tweets: answer.tweets,
                    users: answer.users
                };

                if (feed.tweets)
                {
                    for (var i = 0; i<feed.tweets.length; i++)
                    {
                        var data = {
                            tweet: feed.tweets[i],
                            user: feed.users[feed.tweets[i].author]
                        };
                        result[result.length] = tmpl.apply(        {
                            block: 'tweet-item',
                            data: data,
                            js: data
                        });
                    }
                }

                res.set('Content-Type', 'application/json; charset=utf-8');

                res.send(JSON.stringify(result));
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
            'Cache-Control': 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0',
            json: true
        }
    }, function (error, response, answer) {
        answer = JSON.parse(answer);

        if (response.statusCode == 403) {
            res.redirect('/auth/');
        }
        else {

            if (answer) {
                if (response.statusCode != 404) {
                    render(req, res, {
                        view: 'profile',
                        title: 'Profile  Page',
                        profile_data: answer
                    })
                } else {
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
                if (answer.status === 'Tweet not found')
                {
                    render(req, res, {
                        view: '404',
                        title: ''
                    })
                }
                else
                {
                    data = {
                        tweet: answer.tweets[0],
                        user: answer.users[answer.tweets[0].author]
                    };

                    render(req, res, {
                        view: 'tweet',
                        title: 'Tweet  Page',
                        tweet: data.tweet,
                        user: data.user
                    })

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

app.get('/map/', function (req, res) {
    render(req, res, {
        view: 'vmap',
        title: 'My map'
    })
});
app.get('/feedmap/', function (req, res) {
    var cookie = request.cookie('connect.sid=' + req.cookies['connect.sid']);
    var url = config.servers.api_server + '/api/user/feed';
    var $headers= {
        Cookie: cookie,
        json: true,
    };
    if (req.connection.remoteAddress !== undefined){
        $headers['x-jfh3fh36gt4re3rybfh-remote']= req.connection.remoteAddress;
    }
    if (req.headers && req.headers['x-forwarded-for'] !== undefined) {
        $headers['x-forwarded-for']= req.headers['x-forwarded-for'];
    }
    
    request({
        url: url,
        headers: $headers
    }, function (error, response, answer) {
        answer = JSON.parse(answer);

        if (response.statusCode == 403) {
            res.redirect('/auth/');
        }
        else {
            if (answer) {
                answer.usemap=true;
         //       answer.geoIp={"ll":[44.9572,34.1108]};

                render(req, res, {
                    view: 'vmap',
                    title: 'Wall Page'+JSON.stringify(answer),
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


app.get('/feed/', function (req, res) {

    var cookie = request.cookie('connect.sid=' + req.cookies['connect.sid']);
    var url = config.servers.api_server + '/api/user/feed';

    //return res.send(url);

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
                answer.usemap=true;
                render(req, res, {
                    view: 'feed',
                    title: 'Feed Page',
                    tweets: answer.tweets,
                    users: answer.users
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


/*
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
*/
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

    var cookie = request.cookie('connect.sid=' + req.cookies['connect.sid']),
        url = config.servers.api_server + '/api/user/';

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
    var cookie = request.cookie('connect.sid=' + req.cookies['connect.sid']),
        url = config.servers.api_server + '/api/geo/';
    var $headers= {
        Cookie: cookie,
        json: true,
    };
    if (req.connection.remoteAddress !== undefined){

        $headers['x-jfh3fh36gt4re3rybfh-remote']= req.connection.remoteAddress;
    }
    //req.headers['x-forwarded-for']='209.185.108.134';
    if (req.headers && req.headers['x-forwarded-for'] !== undefined) {
        $headers['x-forwarded-for']= req.headers['x-forwarded-for'];
    }

    request({
        url: url,
        headers: $headers
    }, function (error, response, answer) {
        answer = JSON.parse(answer);

        if (response.statusCode == 403) {
            res.redirect('/auth/');
        }
        else {
            render(req, res, {
                view: 'compose',
                title: 'Compose new tweet message',
                tweet_data: answer
            })

        }
    });
});

app.get('/comment/:id', function (req, res) {
    var cookie = request.cookie('connect.sid=' + req.cookies['connect.sid']),
        url = config.servers.api_server + '/api/tweet/' + req.params.id;
    var $headers= {
        Cookie: cookie,
        json: true,
    };
    if (req.connection.remoteAddress !== undefined){
        $headers['x-jfh3fh36gt4re3rybfh-remote']= req.connection.remoteAddress;
    }
    //req.headers['x-forwarded-for']='209.185.108.134';
    if (req.headers && req.headers['x-forwarded-for'] !== undefined) {
        $headers['x-forwarded-for']= req.headers['x-forwarded-for'];
    }
    request({
        url: url,
        headers: $headers
    }, function (error, response, answer) {
        answer = JSON.parse(answer);

        if (response.statusCode == 403) {
            res.redirect('/auth/');
        }
        else {
            if (answer) {
                render(req, res, {
                    view: 'compose',
                    title: 'Reply to tweet message',
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

app.get('/users-search/', function (req, res) {
    render(req, res, {
        view: 'users-search',
        title: 'Users Search'
    })
});

app.get('/single/', function (req, res) {
    render(req, res, {
        view: 'single',
        title: 'Single block',
        single: req.query.single,
        profile_data: {
            displayName: 'smolnikovp',
            firstName: 'Pavel',
            lastName: 'Smolnikov',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet ornare diam, ' +
            'sit amet pharetra ante iaculis at. Integer sit amet nibh eleifend nisl laoreet congue. Aenean laoreet ',
            avatar: 'https://pbs.twimg.com/profile_images/652908696721297410/xpBsSCDu.jpg',
            followers: 1,
            follows: 5,
            tweets: [
                {
                    _id: '57cc17d6270e510a02bba8cd',
                    author: '57c19d3dbb873d7c3b8cfaa1',
                    content: 'dont blink',
                    __v: 0,
                    timestamp: '2016-08-01T12:16:40.308Z',
                    like: false,
                    retweet: false
                },
                {
                    _id: '57cc17bb270e510a02bba8cc',
                    author: '57c19d3dbb873d7c3b8cfaa1',
                    content: 'THIS IS SPARTA',
                    __v: 2,
                    timestamp: '2016-09-03T12:16:40.308Z',
                    like: true,
                    retweet: true
                }
            ],
            self: true
        }
    })
});

app.get('/image-upload/', function (req, res) {
    render(req, res, {
        view: 'image-upload',
        title: 'Image upload'
    })
});

app.get('*', function (req, res) {
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
