block('tweet').mod('default', true)(
    content()(
        function () {
            var tweet_content = [],
                data = this.ctx.content,
                extras = this.ctx.content.extras,
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

            if (extras.url) {
                tweet_content[tweet_content.length] = {
                    block: 'tweet-url',
                    content: [
                        {
                            block: 'link',
                            url: extras.url,
                            content: extras.url
                        }
                    ]
                }
            }

            if (extras.image) {
                tweet_content[tweet_content.length] = {
                    block: 'tweet-image',
                    content: [
                        {
                            block: 'image',
                            url: extras.image
                        }
                    ]
                }
            }

            tweet_content[tweet_content.length] = {
                block: 'link',
                mods: { plaintext: true },
                url: data.url,
                content: data.tweet_text
            };

            if (extras.geo) {
                tweet_content[tweet_content.length] = {
                    block: 'tweet-geo',
                    content: extras.geo
                }
            }

            //console.log(tweet_content);

            return [
                {
                    elem: 'left',
                    content: {
                        block: 'image',
                        mix: { block: 'avatar', mods: { type: 'tweet' } },
                        url: data.avatar
                    }
                },
                {
                    elem: 'right',
                    content: [
                        {
                            block: 'account-info',
                            content: [
                                {
                                    block: 'text',
                                    mods: { username: true }
                                    // content: data.lastName + ' ' + data.firstName
                                },
                                {
                                    block: 'text',
                                    mods: { id: true },
                                    content: data.login
                                }
                            ]
                        },
                        {
                            block: 'text',
                            mods: { time: true },
                            content: data.time
                        },
                        {
                            block: 'text',
                            content: tweet_content
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
