modules.define('tweet-drawer', ['i-bem__dom', 'jquery', 'BEMHTML'],

    function (provide, BEMDOM, $, BEMHTML) {

        provide(BEMDOM.decl(this.name, {
            onSetMod: {
                js: {
                    inited: function () {
                        var loading = false,
                            timestamp = this.params.timestamp;
                        this.bindToWin('scroll', function () {

                            var _scroll = $(window).scrollTop(),
                                h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
                                self = this;

                            if (this.domElem.position().top < _scroll + h) {
                                if (!loading) {
                                    loading = true;
                                    self.setMod('active', true);
                                    setTimeout(function () {
                                        $.ajax(
                                            {
                                                url: window.config.api_server + '/api/user/feed/history',
                                                type: 'GET',
                                                data: { offset: timestamp },
                                                dataType: 'json',
                                                context: self
                                            }
                                        ).done(
                                            function (msg) {

                                                function getDiffTime(t) {
                                                    var old_date = new Date(t),
                                                        curr_date = new Date(),
                                                        diff_date = curr_date - old_date,
                                                        diff_time,
                                                        sec = 1000,
                                                        min = sec * 60,
                                                        hour = min * 60,
                                                        day = hour * 24;

                                                    //выводим время с момента добавления твита
                                                    if (diff_date < sec * 60) {
                                                        diff_time = Math.floor(diff_date / sec) + ' c. назад'; //время в секундах
                                                    } else if (diff_date >= sec * 60 && diff_date < min * 60) {
                                                        diff_time = Math.floor(diff_date / min) + ' мин. назад'; //время в минутах
                                                    } else if (diff_date < hour * 24) {
                                                        diff_time = Math.floor(diff_date / hour) + ' ч. назад'; //время в часах
                                                    } else {
                                                        diff_time = Math.floor(diff_date / day) + ' д. назад'; //время в днях
                                                    }

                                                    return diff_time;
                                                }

                                                if (msg.tweets.length) {

                                                    var users = msg.users,
                                                        that = this;
                                                    $.each(msg.tweets, function (i, v) {
                                                        /*console.log(BEMHTML.apply({
                                                         block: 'tweet',
                                                         mods: {default: true},
                                                         content: {
                                                         avatar: users[v.author].avatar,
                                                         login: '@' + users[v.author].displayName,
                                                         time: getDiffTime(v.timestamp),
                                                         tweet_text: v.content,
                                                         extras: v.extras,
                                                         url: window.config.frontend_server + '/tweet/' + v._id
                                                         },
                                                         js: {
                                                         data: v
                                                         }
                                                         }));*/
                                                        BEMDOM.before(that.domElem, BEMHTML.apply({
                                                            block: 'tweet',
                                                            mods: { default: true },
                                                            content: {
                                                                avatar: users[v.author].avatar,
                                                                login: '@' + users[v.author].displayName,
                                                                time: getDiffTime(v.timestamp),
                                                                tweet_text: v.content,
                                                                extras: v.extras,
                                                                url: window.config.frontend_server + '/tweet/' + v._id
                                                            },
                                                            js: {
                                                                data: v
                                                            }
                                                        }));
                                                    });
                                                    loading = false;
                                                    timestamp = msg.tweets[msg.tweets.length - 1].timestamp;
                                                    self.delMod('active');
                                                    //console.log(timestamp);
                                                } else {
                                                    BEMDOM.update(this.domElem, 'Больше ничего нет, зайдите попозже');
                                                    this.unbindFromWin('scroll');
                                                }
                                            }
                                        ).fail(
                                            function () {
                                                BEMDOM.update(this.domElem, 'Сервис недоступен');
                                            }
                                        );
                                    }, 100);
                                }
                            }

                            // тоже должно работать, если подключить jquery в modules.define
                            // у тебя подключено в первом примере

                            // а значит и это
                            //this.toggleMod('switched', 'on', 'off', _scroll >= 640);
                            // тоже, потому что this здесь все еще экземпляр блока
                        });
                    }
                }
            }
        }));
    });
