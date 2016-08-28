block('page').elem('body').elemMod('wall', true)(
    content()(
        function () {
            var tweet_data = this.ctx.data,
                users = tweet_data.users,
                tweets_in = tweet_data.tweets,
                tweets_out = [],
                date = new Date(),
                add_tweet,
                add_btns,
                i;

            // console.log('data.users: ', JSON.stringify(this.tweet_data,null,'  '))
            // console.log(users);
            // console.log('-----------------------------------------');
            // console.log(tweets_in[0].content);

            for (i = 0; i <= tweets_in.length - 1; i += 1) {
                date = date.toString();

                add_tweet = {
                    block: 'tweet',
                    mods: { default: true },
                    content: [
                        {
                            elem: 'left',
                            content: {
                                block: 'image',
                                mix: { block: 'avatar', mods: { type: 'tweet' } },
                                url: users[tweets_in[i].author].avatar
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
                                            content: '@' + tweets_in[i].displayName
                                        }
                                    ]
                                },
                                {
                                    block: 'text',
                                    mods: { time: true },
                                    content: tweets_in[i].timestamp
                                },
                                {
                                    block: 'text',
                                    mods: { main: true },
                                    content: tweets_in[i].content
                                },
                                {
                                    block: 'control-group',
                                    content: ['reply', 'repost', 'like'].map(function (v) {

                                        add_btns = {
                                            block: 'button',
                                            mix: { block: 'tweet', elem: v },
                                            text: '',
                                            icon: {
                                                block: 'icon',
                                                mods: {}
                                            }
                                        };

                                        add_btns.icon.mods[v] = true;

                                        return add_btns;
                                    })
                                }
                            ]
                        }
                    ]
                };

                tweets_out[i] = add_tweet;
            }
            return tweets_out;
        }
    )
);
