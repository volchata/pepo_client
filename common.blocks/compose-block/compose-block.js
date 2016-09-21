modules.define('compose-block', ['i-bem__dom', 'events__channels', 'jquery', 'BEMHTML'],

    function (provide, BEMDOM, channels, $, BEMHTML) {

        provide(BEMDOM.decl(this.name, {
            onSetMod: {
                js: {
                    inited: function () {
                        console.log(['COMPOSE BLOCK', this.params]);
                        this.channel = 'attach_events';
                        window.tweet = this.tweet = { extras: {} };
                        var self = this,
                            send_tweet_btn = this.findBlockInside('send-tweet-btn'),
                            attach_events = channels(this.channel);

                        this.text_input = this.findBlockInside('textarea').domElem;
                        this.extraFields = ['image', 'geo', 'url', 'attachment'];

                        attach_events.on('fail', this._onFail, this);
                        attach_events.on('success', this._onSuccess, this);
                        attach_events.on('progress', this._onProgress, this);

                        this.findBlocksInside('compose-btn').forEach(function (bl) {
                            var v = bl.findBlockOn('button').getMod('attach');
                            if (v) {
                                self.buttonHandler(bl, v);
                            }
                        });

                        if (this.params.tweets) {
                            this.tweet_to_reply = this.params.tweets[0]._id;
                            this.text_input.val('@' +
                                this.params.users[this.params.tweets[0].author].displayName + ' ');
                        }

                        send_tweet_btn.bindTo('click', this.sender.bind(this) );
                    }
                },
                mode: function (modname, now) {
                    if ( (now) && ( (this.findBlockInside(
                            {blockName: 'compose-modal', modName: 'state', modVal: now})) === null) ) {
                        var t = this.elem('compose-modal-container');
                        BEMDOM.append(t, BEMHTML.apply({
                            block: 'compose-modal',
                            mods: {mode: now},
                            js: {
                                channel: this.channel,
                                geoIp: this.params.geoIp
                            }
                        }));
                    }
                }
            },
            buttonHandler: function (btn, mode) {
                var self = this;

                btn.bindTo('pointerclick', function () {
                    self.setMod('mode', mode);
                });
            },
            _onFail: function (event, data) {
                this.showError(data ? data.msg : null);
                this.composeTweet(data);
            },
            _onSuccess: function (event, data) {
                console.log('Success:', data);
                this.composeTweet(data);
            },
            _onProgress: function (event, data) {
                // console.log('Progress:', data);
                this.composeTweet(data);
            },
            composeTweet: function (data) {
                if (!data) return;
                var extras = this.tweet.extras;
                this.extraFields.forEach( function (item) {
                    var val = data[item];
                    console.log(['extra', item, val]);
                    if ((val !== undefined) /*&& (typeof val !== 'object')*/) {
                        extras[item] = val;
                    }
                });
                if ((data.attachment) && (typeof data.attachment === 'object')) {
                    extras.attachment = data.attachment.image;
                }

            },
            showError: function ( msg ) {
                var self = this;
                if (!this.errMsgs) this.errMsgs = [];
                if (!msg) msg = 'Неизвестная ошибка сервера';
                this.errMsgs.push('<li>' + msg + '</li>');
                this.elem('error-zone').html( this.errMsgs.join('\n') );
                setTimeout(function () {
                    self.errMsgs.shift();
                    self.elem('error-zone').html( self.errMsgs.join('\n') );
                }, 5000);
            },
            sender: function () {
                var xtra = this.tweet.extras;
                if ( (this.text_input.val().length > 0) || // eslint-disable-line brace-style
                    ( this.extraFields.some( function (field) {
                        return (xtra[field]);
                    }) ))
                {
                    return this.sendTweet();
                }
                return this.showError('Напишите что-нибудь или загрузите картинку');
            },
            sendTweet: function () {
                var self = this,
                    uri;
                if (this.tweet_to_reply) {
                    uri = '/api/tweet/' + this.tweet_to_reply;
                } else {
                    uri = '/api/user/feed';
                }
                this.tweet.content = this.text_input.val();

                $.ajax(
                    {
                        url: window.config.api_server + uri,
                        type: 'POST',
                        data: JSON.stringify( this.tweet ),
                        dataType: 'json',
                        contentType: 'application/json; charset=utf-8',
                        context: this
                    }
                ).done(
                function () {
                    document.location.href = '/feed';
                }
                ).fail(
                    function (msg) {
                        var response = msg.responseText || 'Неизвестная ошибка сервера';
                        self.showError(response);
                    }
                );
            }

        }));

    });
