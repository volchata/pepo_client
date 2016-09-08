block('tweets')(
    content()(
        function () {
            if (!this.data.tweet_data) {
                var data = this.data.profile_data;
            } else {
                var data = this.data.tweet_data,
                    users = data.users;
            }

            var that = this,
                tweets = data.tweets;

            function setDiffTime(i) {
                var curr_date = new Date(),
                    old_date = new Date(tweets[i].timestamp),
                    diff_date = curr_date - old_date,
                    sec = 1000,
                    min = sec * 60,
                    hour = min * 60,
                    day = hour * 24,
                    diff_time;

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

                return diff_time;
            }

            if (!tweets || !tweets.length) {
                return {
                    block: 'text',
                    mods: { about: true },
                    content: 'Вы еще ничего не добавляли'
                };
            } else {
                tweets = tweets.map(function (v, i) {
                    if (!that.data.tweet_data) {
                        var login = '@' + data.displayName,
                            username = data.lastName + ' ' + data.firstName,
                            avatar = data.avatar;
                    } else {
                        var login = '@' + users[v.author].displayName,
                            username = users[v.author].firstName + ' ' + users[v.author].lastName,
                            avatar = users[v.author].avatar;
                    }

                    var tweets_text = tweets[i].content,
                        url = '/tweet/' + tweets[i]._id;

                    return {
                        block: 'tweet',
                        id: tweets[i]._id,
                        avatar: avatar,
                        username: username,
                        login: login,
                        time: setDiffTime(i),
                        tweet_text: tweets_text,
                        url: url,
                        extras: tweets[i].extras
                    };
                });

                return tweets;
            }
        })
);
