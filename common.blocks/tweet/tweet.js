modules.define('tweet', ['i-bem__dom', 'BEMHTML', 'jquery'], function (provide, BEMDOM, BEMHTML, $) {

    provide(BEMDOM.decl(this.name,
        {
            _onClick: function (e) {
                var action = e.target.params.action,
                    tweet_id = this.params.data._id,
                    that = e.target;

                switch (action) {
                    case 'like':

                        if (!that.hasMod('type')) {
                            $.ajax(
                                {
                                    url: window.config.api_server + "/api/tweet/" + this.params.data._id + "/like",
                                    type: "POST",
                                    data: {},
                                    dataType: "json",
                                    context: that
                                }
                            ).done(
                                function (msg) {
                                    that.setMod('type', 'good');
                                    that.setText(msg.tweets[0].extras.likes.length);
                                }
                            );
                        } else {
                            $.ajax(
                                {
                                    url: window.config.api_server + "/api/tweet/" + this.params.data._id + "/like",
                                    type: "DELETE",
                                    data: {},
                                    dataType: "json",
                                    context: that
                                }
                            ).done(
                                function (msg) {
                                    that.delMod('type');
                                    that.setText(String(msg.tweets[0].extras.likes.length));
                                }
                            );
                        }


                        break;
                    case 'repost':
                        if (!that.hasMod('type')) {
                            $.ajax(
                                {
                                    url: window.config.api_server + "/api/tweet/" + this.params.data._id + "/retweet",
                                    type: "POST",
                                    data: {},
                                    dataType: "json",
                                    context: that
                                }
                            ).done(
                                function (msg) {
                                    that.setMod('type', 'good');
                                    that.setText(msg.tweets[0].extras.retweets.length);
                                }
                            );
                        } else {
                            $.ajax(
                                {
                                    url: window.config.api_server + "/api/tweet/" + this.params.data._id + "/retweet",
                                    type: "DELETE",
                                    data: {},
                                    dataType: "json",
                                    context: that
                                }
                            ).done(
                                function (msg) {
                                    that.delMod('type');
                                    that.setText(String(msg.tweets[0].extras.retweets.length));
                                }
                            );
                        }

                        break;
                case 'reply':
                    document.location.href = window.config.api_server + '/comment/' + tweet_id;
                    break;
                }
            }
        },
        {
            live: function () {
                this.liveInitOnBlockInsideEvent('click', 'button', function (e) {
                    this._onClick(e);
                });
            },

            failHandle: function (msg) {
                var response = msg.responseText;
                if (!response) {
                    response = 'Неизвестная ошибка сервера';
                }

                setTimeout(function () {
                    alert(response);
                }, 0);
                this.setMod('type', 'error');

                this.unbindFrom('click');
            }
        }));
});
