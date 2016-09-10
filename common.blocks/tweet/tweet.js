modules.define('tweet', ['i-bem__dom', 'BEMHTML', 'jquery'], function (provide, BEMDOM, BEMHTML, $) {

    provide(BEMDOM.decl(this.name,
        {
            _onClick: function (e) {
                var action = e.target.params.action,
                    tweet_id = this.params.id,
                    that = e.target;

                switch (action) {
                    case 'like':
                        if (!that.hasMod('type')) {
                            $.ajax(
                                {
                                    url: window.config.api_server + '/api/tweet/' + this.params.id + '/like',
                                    type: 'POST',
                                    data: {},
                                    dataType: 'json',
                                    context: that
                                }
                        ).done(
                            function (msg) {
                                that.setMod('type', 'good');
                                that.setMod('enabled');
                                that.setText(msg.tweets[0].extras.likes.length);
                            }
                        );
                        } else {
                            $.ajax(
                                {
                                    url: window.config.api_server + '/api/tweet/' + this.params.id + '/like',
                                    type: 'DELETE',
                                    data: {},
                                    dataType: 'json',
                                    context: that
                                }
                        ).done(this.__self.onDelete);
                        }
                        break;
                    case 'repost':
                        if (!that.hasMod('type')) {
                            $.ajax(
                                {
                                    url: window.config.api_server + '/api/tweet/' + this.params.id + '/retweet',
                                    type: 'POST',
                                    data: {},
                                    dataType: 'json',
                                    context: that
                                }
                        ).done(
                            function (msg) {
                                that.setMod('type', 'good');
                                that.setMod('enabled');
                                that.setText(msg.tweets[0].extras.retweets.length);
                            }
                        );
                        } else {
                            $.ajax(
                                {
                                    url: window.config.api_server + '/api/tweet/' + this.params.id + '/retweet',
                                    type: 'DELETE',
                                    data: {},
                                    dataType: 'json',
                                    context: that
                                }
                        ).done(this.__self.onDelete);
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

            onDelete: function (msg) {
                this.delMod('type');
                this.delMod('enabled');
                this.delMod('focused');
                this.setText(String(msg.tweets[0].extras.likes.length));
            }
        }));
});
