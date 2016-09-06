block('tweets').mod('display', 'default')(
    content()(
        function () {
            //     // console.log(this.data.profile_data)
            //     // return
            //     var data = this.data.profile_data,
            //         tweets = data.tweets,
            //         diff_time,
            //         curr_date = new Date();
            //
            //     console.log(this.data.profile_data)
            //
            //     function setDiffTime(i) {
            //         var old_date = new Date(tweets[i].timestamp),
            //             diff_date = curr_date - old_date,
            //             sec = 1000,
            //             min = sec * 60,
            //             hour = min * 60,
            //             day = hour * 24;
            //
            //         //выводим время с момента добавления твита
            //         if (diff_date < sec * 60) {
            //             diff_time = Math.floor(diff_date / sec) + ' c. назад'; //время в секундах
            //         } else if (diff_date >= sec * 60 && diff_date < min * 60) {
            //             diff_time = Math.floor(diff_date / min) + ' мин. назад'; //время в минутах
            //         } else if (diff_date < hour * 24) {
            //             diff_time = Math.floor(diff_date / hour) + ' ч. назад'; //время в часах
            //         } else {
            //             diff_time = Math.floor(diff_date / day) + ' д. назад'; //время в днях
            //         }
            //     }
            //
            //     tweets = tweets.map(function (v, i) {
            //         setDiffTime(i);
            //
            //         return {
            //             block: 'tweet',
            //             content: {
            //                 login: '@' + data.displayName,
            //                 firstName: data.firstName,
            //                 lastName: data.lastName,
            //                 description: data.description,
            //                 avatar: data.avatar,
            //                 tweet_text: tweets.content,
            //                 time: diff_time
            //             },
            //             js: {
            //                 data: {
            //                     extras: {
            //                         likes: [111],
            //                         retweets: [111]
            //                     }
            //                 }
            //             }
            //         };
            //     });
            //
            //     console.log(tweets)
            //     return tweets;

            var data = this.data.tweet_data,
                users = data.users,
                tweets = data.tweets,
                curr_date = new Date();
            // console.log(tweets[1].content)

            if (!data) {
                data = this.data.profile_data;

            }

            function setDiffTime(i) {
                var old_date = new Date(tweets[i].timestamp),
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

            tweets = tweets.map(function (v, i) {
                return {
                    block: 'tweet',
                    avatar: users[v.author].avatar,
                    username: users[v.author].firstName + ' ' + users[v.author].lastName,
                    login: '@' + users[v.author].displayName,
                    time: setDiffTime(i),
                    tweet_text: tweets[i].content
                };
            });

            return tweets;
        })
);
