block('tweet-feed')(
    content()(
        function () {

            var tweets = this.ctx.data.tweets,
                users = this.ctx.data.users,

                tweet_feed = tweets.map(function (v) {
                    return {
                        block: 'tweet-item',
                        data: {
                            tweet: v,
                            user: users[v.author]
                        }
                    };
                });
            //console.log(tweet_feed);

            if (tweets.length) {
                tweet_feed[tweet_feed.length] = {
                    block: 'tweet-drawer',
                    data: {
                        timestamp: tweets[tweets.length - 1].timestamp
                    }
                };
            }

            if (tweet_feed.length) {
                return tweet_feed;
            } else {
                return {
                    block: 'text',
                    content: [
                        'В ленте пока ничего нет. Вы можете ',
                        {
                            block: 'link',
                            url: '/compose',
                            content: 'сделать запись'
                        },
                        ' чтобы порадовать мир, или ',
                        {
                            block: 'link',
                            url: '/users-search',
                            content: 'завести себе друзей'
                        },
                        ' хотя бы тут'
                    ]
                };
            }

        })
);

block('tweet-feed').mod('comments').block('tweet-drawer')(
    replace()(
        function () {
            return ''; // уничтожаем блок перемотки для комментариев TODO сделать бесконечный скроллинг каментов
        }
    )
);
