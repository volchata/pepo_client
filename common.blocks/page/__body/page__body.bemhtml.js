block('page').elem('body').elemMod('wall', true)(
    content()(
        function () {
            var tweet_data = this.ctx.data,
                users = tweet_data.users,
                tweets_in = tweet_data.tweets,
                tweets_out = [],
                curr_date = new Date(),
                add_tweet,
                add_btns,
                diff_time;

            function addCtlGrp(value) {
                add_btns = {
                    block: 'button',
                    mix: { block: 'tweet', elem: value },
                    text: '',
                    icon: {
                        block: 'icon',
                        mods: {}
                    }
                };

                add_btns.icon.mods[value] = true;

                return add_btns;
            }

            function setDiffTime(i) {
                var old_date = new Date(tweets_in[i].timestamp),
                    diff_date = curr_date - old_date,
                    sec = 1000,
                    min = sec * 60,
                    hour = min * 60,
                    day = hour * 24;

                //выводим время с момента добавления твита
                if (diff_date < sec * 60) {
                    diff_time = Math.floor(diff_date / sec) + ' c. назад'; //время в секундах
                } else if (diff_date >= sec * 60 && diff_date < min * 60) {
                    diff_time = Math.floor(diff_date / min) + ' мин. назад'; //время в минутах
                } else if (diff_date < hour * 24) {
                    diff_time = Math.floor(diff_date / hour) + ' ч. назад'; //время в часах
                } else {
                    diff_time = Math.floor(diff_date / day) + ' д. назад'; //время в днях
                }
            }

            tweets_in.map(function (v, i) {
                setDiffTime(i);

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
                                            content: '@' + users[tweets_in[i].author].displayName
                                        }
                                    ]
                                },
                                {
                                    block: 'text',
                                    mods: { time: true },
                                    content: diff_time
                                },
                                {
                                    block: 'text',
                                    mods: { main: true },
                                    content: tweets_in[i].content
                                },
                                {
                                    block: 'control-group',
                                    content: ['reply', 'repost', 'like'].map(addCtlGrp)
                                }
                            ]
                        }
                    ]
                };

                tweets_out[i] = add_tweet;
            });
            return tweets_out;
        }
    )
);
