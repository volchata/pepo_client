modules.define('tweet-item', ['i-bem__dom', 'jquery'],

    function (provide, BEMDOM, $) {

        provide(BEMDOM.decl(this.name, {
            onSetMod: {
                js: {
                    inited: function () {
                        var tweet = this.params.tweet,
                            that = this,
                            like_button = this.findBlockInside({ blockName: 'button', modName: 'action', modVal: 'like'}),
                            retweet_button = this.findBlockInside({ blockName: 'button', modName: 'action', modVal: 'retweet'}),
                            reply_button = this.findBlockInside({ blockName: 'button', modName: 'action', modVal: 'reply'}),
                            delete_button = this.findBlockInside({ blockName: 'button', modName: 'action', modVal: 'delete'});

                        console.log('tweet js');

                        if (like_button) like_button.bindTo('pointerclick', function (e) {
                            e.stopPropagation();
                            if (!like_button.hasMod('pinned')) {
                                $.ajax(
                                    {
                                        url: window.config.api_server + '/api/tweet/' + tweet._id + '/like',
                                        type: 'POST',
                                        contentType: 'application/json',
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
                                        contentType: 'application/json',
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

                        if (retweet_button) retweet_button.bindTo('pointerclick', function (e) {
                            e.stopPropagation();
                            if (!retweet_button.hasMod('pinned')) {
                                $.ajax(
                                    {
                                        url: window.config.api_server + '/api/tweet/' + tweet._id + '/retweet',
                                        type: 'POST',
                                        contentType: 'application/json',
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
                                        contentType: 'application/json',
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

                        if (reply_button) reply_button.bindTo('pointerclick', function (e) {
                            e.stopPropagation();
                            document.location.href = window.config.frontend_server + '/comment/' + tweet._id;
                        });

                        this.bindTo('pointerclick', function () {
                            document.location.href = window.config.frontend_server + '/tweet/' + tweet._id;
                        });

                        if (delete_button) delete_button.bindTo('pointerclick', function () {
                            // var answer = confirm('Are you sure?'); TODO убрал из-за линтеров

                            var answer = true;
                            if (answer) {
                                $.ajax(
                                    {
                                        url: window.config.api_server + '/api/tweet/' + tweet._id,
                                        type: 'DELETE',
                                        contentType: 'application/json',
                                        data: {},
                                        dataType: 'json'
                                    })
                                .done(
                                    function () {
                                        that.setMod('deleted');
                                    }
                                );
                            }
                        });
                    }
                }
            }
        }));
    });
