modules.define('compose-block', ['i-bem__dom', 'jquery', 'BEMHTML'],

    function (provide, BEMDOM, $, BEMHTML) {

        provide(BEMDOM.decl(this.name, {
            onSetMod: {
                js: {
                    inited: function () {
                        var that = this;
                        var text_input = this.findBlockInside('textarea');
                        var send_tweet_btn = this.findBlockInside('send-tweet-btn');

                        console.log(send_tweet_btn);

                        text_input.bindTo('keyup', function(event)
                            {
                                console.log("!");
                                that.delMod(send_tweet_btn.domElem, "disabled");
                            }
                        );
                    }
                }
            }

        }));

    });
