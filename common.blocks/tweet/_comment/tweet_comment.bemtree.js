block('tweet').mod('comment', true)(
    content()(
        function () {
            var data = this.ctx.content,
                tweet = this.ctx.js.data; // TODO вместо этого читкода лучше в контент передать то, что надо

            function addCtlGrp(value) {

                var text = '',
                    mods = {};

                if (value === 'like') {
                    text = tweet.extras.likes.length;
                    if (tweet.like) {
                        mods = { type: 'good' };
                    }
                }

                if (value === 'repost') {
                    text = tweet.extras.retweets.length;
                    if (tweet.retweet) {
                        mods = { type: 'good' };
                    }
                }

                var add_btns = {
                    block: 'button',
                    mods: mods,
                    mix: {
                        block: 'tweet', elem: 'action'
                    },
                    text: text,
                    icon: {
                        block: 'icon',
                        mods: {}
                    },
                    js: {
                        action: value
                    }
                };

                add_btns.icon.mods[value] = true;

                return add_btns;
            }

            return [
                {
                    elem: 'left',
                    content: {
                        block: 'image',
                        mods: { type: 'tweet' },
                        url: data.avatar
                    }
                },
                {
                    elem: 'right',
                    content: [
                        {
                            block: 'text',
                            mods: { username: true },
                            content: 'Pavel Smolnikov'
                        },
                        {
                            block: 'text',
                            mods: { id: true },
                            content: data.login
                        },
                        {
                            block: 'text',
                            mods: { time: true },
                            content: data.time
                        },
                        {
                            block: 'link',
                            mods: { plaintext: true },
                            url: data.url,
                            content: data.tweet_text
                        },
                        {
                            block: 'control-group',
                            content: ['reply', 'repost', 'like'].map(addCtlGrp)
                        }
                    ]
                }
            ];
        }
    )
);
