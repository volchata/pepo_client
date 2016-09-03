block('tweet').mod('default', true)(
    content()(
        function () {
            var data = this.ctx.content,
                tweet = this.ctx.js.data,
                extras = this.ctx.content.extras,
                tweet_content = []; // TODO вместо этого читкода лучше в контент передать то, что надо

            function addCtlGrp(value) {

                var text = '',
                    mods = {},
                    add_btns = {
                        block: 'button',
                        mods: mods,
                        mix: {
                            block: 'tweet',
                            elem: 'action'
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

                add_btns.text = text;
                add_btns.icon.mods[value] = true;

                return add_btns;
            }

            if ((extras.url) && (!extras.attachment)) {
                tweet_content[tweet_content.length] = {
                    block: 'tweet-url',
                    content: [
                        {
                            block: 'link',
                            url: extras.url,
                            content: extras.url
                        }
                    ]
                };
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
                };
            }
            if (extras.attachment) {
                tweet_content.push({
                    block: 'tweet-attachment',
                    target: extras.attachment.url,
                    url: extras.attachment.image,
                    title: extras.attachment.title
                });
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
                };
            }

            //console.log(tweet_content);

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
