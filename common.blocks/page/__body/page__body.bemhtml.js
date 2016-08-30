block('page').elem('body').elemMod('wall', true)(
    content()(
        function () {
            var tweet_data = this.ctx.data,
                users = tweet_data.users,
                tweets_in = tweet_data.tweets,
                tweets_out = [],
                curr_date = new Date(),
                diff_time;

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

                var add_tweet = {
                    block: 'tweet',
                    mods: { default: true },
                    content: {
                        url: users[tweets_in[i].author].avatar,
                        login: '@' + users[tweets_in[i].author].displayName,
                        time: diff_time,
                        tweet_text: tweets_in[i].content
                    }
                };

                tweets_out[i] = add_tweet;
            });
            return tweets_out;
        }
    )
);
