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
                                                url: window.config.frontend_server + '/bemtree/user/feed/history/' + timestamp + '/',
                                                type: 'GET',
                                                dataType: 'json',
                                                context: self
                                            }
                                        ).done(
                                            function (msg) {

                                                if (msg.length) {

                                                    $.each(msg, function (i, v) {

                                                        BEMDOM.before(self.domElem, BEMHTML.apply(v));
                                                    });
                                                    loading = false;
                                                    timestamp = msg[msg.length - 1].data.tweet.timestamp;
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

                        });
                    }
                }
            }
        }));
    });
