modules.define('tweet-item', ['i-bem__dom', 'jquery'],

    function (provide, BEMDOM, $) {

        provide(BEMDOM.decl(this.name, {
            onSetMod: {
                js: {
                    inited: function () {
                        var tweet = this.params.tweet,
                            like_button = this.findBlockInside({ blockName: 'button', modName: 'action', modVal: 'like'}),
                            retweet_button = this.findBlockInside({ blockName: 'button', modName: 'action', modVal: 'retweet'}),
                            reply_button = this.findBlockInside({ blockName: 'button', modName: 'action', modVal: 'reply'});

                        like_button.bindTo('pointerclick', function () {
                            if (!like_button.hasMod('pinned')) {
                                $.ajax(
                                    {
                                        url: window.config.api_server + '/api/tweet/' + tweet._id + '/like',
                                        type: 'POST',
                                        data: {},
                                        dataType: 'json'
                                    }
                                ).done(
                                    function (msg) {
                                        like_button.setMod('pinned', true);
                                        like_button.setText(msg.tweets[0].extras.likes.length);
                                    }
                                );
                            } else {
                                $.ajax(
                                    {
                                        url: window.config.api_server + '/api/tweet/' + tweet._id + '/like',
                                        type: 'DELETE',
                                        data: {},
                                        dataType: 'json'
                                    }
                                ).done(
                                    function (msg) {
                                        like_button.delMod('pinned');
                                        like_button.setText(String(msg.tweets[0].extras.likes.length));
                                    }
                                );
                            }

                        });

                        retweet_button.bindTo('pointerclick', function () {
                            if (!retweet_button.hasMod('pinned')) {
                                $.ajax(
                                    {
                                        url: window.config.api_server + '/api/tweet/' + tweet._id + '/retweet',
                                        type: 'POST',
                                        data: {},
                                        dataType: 'json'
                                    }
                                ).done(
                                    function (msg) {
                                        retweet_button.setMod('pinned', true);
                                        retweet_button.setText(msg.tweets[0].extras.retweets.length);
                                    }
                                );
                            } else {
                                $.ajax(
                                    {
                                        url: window.config.api_server + '/api/tweet/' + tweet._id + '/retweet',
                                        type: 'DELETE',
                                        data: {},
                                        dataType: 'json'
                                    }
                                ).done(
                                    function (msg) {
                                        retweet_button.delMod('pinned');
                                        retweet_button.setText(String(msg.tweets[0].extras.retweets.length));
                                    }
                                );
                            }

                        });

                        reply_button.bindTo('pointerclick', function () {
                            document.location.href = window.config.api_server + '/comment/' + tweet._id;
                        });
                    }
                }
            }
        }));
    });
