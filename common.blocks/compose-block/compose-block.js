modules.define('compose-block', ['i-bem__dom', 'jquery', 'BEMHTML'],

    function (provide, BEMDOM, $, BEMHTML) {

        provide(BEMDOM.decl(this.name, {
            onSetMod: {
                js: {
                    inited: function () {
                        function update_btn(btnelem, textelem) {
                            var val = textelem.domElem.val();

                            if (val) {
                                btnelem.delMod("disabled");
                            } else {
                                btnelem.setMod("disabled", true);
                            }
                        }

                        var that = this,
                            tweet_image = null,
                            tweet_url = null,
                            text_input = this.findBlockInside('textarea'),
                            send_tweet_btn = this.findBlockInside('send-tweet-btn');

                        // события редактора

                        this.findBlockOutside('page').on(
                            'upload_success', // имя БЭМ-события
                            function (event, data) {
                                tweet_image = data.image;
                            },
                            that
                        );

                        this.findBlockOutside('page').on(
                            'url_snapshot_success', // имя БЭМ-события
                            function (event, data) {
                                tweet_url = data.url; // TODO - надо ли тут раскидать данные?
                            },
                            that
                        );

                        update_btn(send_tweet_btn, text_input);

                        text_input.bindTo('keyup', function () {
                            update_btn(send_tweet_btn, text_input);
                        });

                        send_tweet_btn.bindTo('click', function () {
                            if (this.hasMod("disabled")) {
                                return;
                            }

                            var old_error = that.findBlockInside('error-message');

                            if (old_error) {
                                BEMDOM.destruct(old_error.domElem);
                            }

                            that.dropElemCache('error-message');

                            $.ajax(
                                {
                                    url: window.config.api_server + '/api/user/feed',
                                    type: "POST",
                                    data: JSON.stringify(
                                        {
                                            content: text_input.domElem.val(),
                                            extras: {
                                                image: tweet_image,
                                                url: tweet_url
                                            }
                                        }
                                    ),
                                    dataType: "json",
                                    contentType: "application/json; charset=utf-8",
                                    context: this
                                }
                            ).done(
                                function () {
                                    document.location.href = "/";
                                }
                            ).fail(
                                function (msg) {
                                    var response = msg.responseText;
                                    if (!response) {
                                        response = 'Неизвестная ошибка сервера';
                                    }

                                    BEMDOM.append(that.domElem, BEMHTML.apply({
                                        block: 'error-message',
                                        content: response
                                    }));


                                    that.dropElemCache('error-message');
                                }
                            );

                        });
                    }
                }
            }

        }));

    });
