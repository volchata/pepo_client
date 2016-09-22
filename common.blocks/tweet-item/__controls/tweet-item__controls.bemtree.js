block('tweet-item').elem('controls')(
    content()(
        function () {
            var tweet = this.ctx.data.tweet,
                controls = ['reply', 'retweet', 'like'],
                data = {
                    reply_count: false,
                    delete_count: false,
                    like_count: tweet.extras.likes.length,
                    retweet_count: tweet.extras.retweets.length,
                    user_reply: false,
                    user_like: tweet.like,
                    user_retweet: tweet.retweet
                };

            if (tweet.owner) {
                controls.push('delete');
            }
            return {
                block: 'control-group',
                content: controls.map(function (value) {
                    var mod_pin = data['user_' + value],
                        btn_mods = { action: value };
                    if (mod_pin) {
                        btn_mods.pinned = true;
                    }

                    var btn = {
                        block: 'button',
                        mods: btn_mods,
                        icon: {
                            block: 'icon',
                            mods: {}
                        },
                        js: true
                    };

                    if (data[value + '_count'] !== false) {
                        btn.text = data[value + '_count'];
                    }

                    btn.icon.mods[value] = true;

                    return btn;

                })
            };
        })
);
