block('tweet')(
    content()(
        function () {
            var data = this.ctx; //{ block: 'tweet' и поля переданные из tweets_display_default.bemtree.js }

            // console.log(data.extras)

            return [
                {
                    elem: 'left',
                    content: {
                        block: 'image',
                        mods: { type: 'avatar' },
                        url: data.avatar
                    }
                },
                {
                    elem: 'right',
                    content: [
                        {
                            block: 'about-user',
                            username: data.username,
                            login: data.login,
                            time: data.time
                        },
                        {
                            block: 'link',
                            mods: { theme: 'islands', size: 'm', plaintext: true },
                            content: data.tweet_text,
                            url: data.url
                        },
                        {
                            elem: 'controls',
                            extras: data.extras
                        }
                    ]
                }
            ];

            // var data = this.data.tweet_data,
            //     tweets = data.tweets,
            //     users = data.users;
            // console.log(tweets)
            //
            // tweets = tweets.map(function (v, i) {
            //     return [
            //
            //     ]
            // })
            //
            // return tweets;
            // var data = this.ctx.content,
            //     tweet = this.ctx.js.data,
            //     extras = tweet.extras,
            //     tweet_content = [],
            //     username = '';
            //
            // console.log(this.data)
            //
            // if ((extras.url) && (!extras.attachment)) {
            //     tweet_content[tweet_content.length] = {
            //         block: 'tweet-url',
            //         content: [
            //             {
            //                 block: 'link',
            //                 url: extras.url,
            //                 content: extras.url
            //             }
            //         ]
            //     };
            // }
            //
            // if (extras.image) {
            //     tweet_content[tweet_content.length] = {
            //         block: 'tweet-image',
            //         content: [
            //             {
            //                 block: 'image',
            //                 url: extras.image
            //             }
            //         ]
            //     };
            // }
            //
            // if (extras.attachment) {
            //     tweet_content.push({
            //         block: 'tweet-attachment',
            //         target: extras.attachment.url,
            //         url: extras.attachment.image,
            //         title: extras.attachment.title
            //     });
            // }
            //
            // tweet_content[tweet_content.length] = {
            //     block: 'link',
            //     mods: { plaintext: true },
            //     url: data.url,
            //     content: data.tweet_text
            // };
            //
            // if (extras.geo) {
            //     tweet_content[tweet_content.length] = {
            //         block: 'tweet-geo',
            //         content: extras.geo
            //     };
            // }
        }
    ));

block('tweet').elem('controls').replace()(function () {
    var extras = this.ctx.extras;

    // console.log(extras)
    return {
        block: 'control-group',
        content: ['reply', 'repost', 'like'].map(function (value) {
            var text = '',
                mods = {},
                add_btns = {
                    block: 'button',
                    mods: mods,
                    mix: { block: 'tweet', elem: 'action' },
                    text: text,
                    icon: {
                        block: 'icon',
                        mods: {}
                    },
                    js: {
                        action: value
                    }
                };

            if (extras.likes.length && value === 'like') {
                add_btns.text = extras.likes.length;
                add_btns.mods = { type: 'good' };
            }

            if (extras.retweets.length && value === 'repost') {
                add_btns.text = extras.retweets.length;
                add_btns.mods = { type: 'good' };
            }

            add_btns.icon.mods = mods;
            add_btns.icon.mods[value] = true;

            return add_btns;

        })
    };
});
