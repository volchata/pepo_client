block('tweet-feed')(
    content()(
        function () {

            var parent_tweet = this.ctx.data.tweet,
                tweets = this.ctx.data.tweets,
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

            console.log(parent_tweet);

            if (tweet_feed.length) {
                return tweet_feed;
            } else {
                this.mods[0].drawer = false;

                if (parent_tweet) {
                    return {
                        block: 'text',
                        content: [
                            'Нет комментариев'
                        ]
                    };

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
            }

        })
);

block('tweet-feed').mod('drawer')(
    content()(
        function () {

            var parent_tweet = this.ctx.data.tweet,
                tweets = this.ctx.data.tweets,
                drawer;

            if (tweets.length) {
                var parent_tweet_id;
                if (parent_tweet) {
                    parent_tweet_id = parent_tweet._id;
                } else {
                    parent_tweet_id = undefined;
                }

                drawer = {
                    block: 'tweet-drawer',
                    data: {
                        timestamp: tweets[tweets.length - 1].timestamp,
                        parent: parent_tweet_id
                    }
                };
            }

            var feed = applyNext();

            if (this.mods[0]) {
                if (this.mods[0].drawer) {
                    feed.push(drawer);
                }

            }

            return feed;
        }
    )
);

block('tweet-feed').mod('role', 'tweet-feed-pics')(
    content()(
        function () {
            var tweets = this.ctx.data.tweets;
            if (tweets.length) {
                return applyNext();
            } else {
                return {
                    block: 'text',
                    content: [
                        'Нет картинок'
                    ]
                };
            }

        }
    )
);

block('tweet-feed').mod('role', 'tweet-feed-last')(
    content()(
        function () {
            var tweets = this.ctx.data.tweets;
            if (tweets.length) {
                return applyNext();
            } else {
                return {
                    block: 'text',
                    content: [
                        'Пользователь ничего не сказал'
                    ]
                };
            }

        }
    )
);

block('tweet-feed').mod('role', 'tweet-feed-liked')(
    content()(
        function () {
            var tweets = this.ctx.data.tweets;
            if (tweets.length) {
                return applyNext();
            } else {
                return {
                    block: 'text',
                    content: [
                        'До сих пор ничего не понравилось'
                    ]
                };
            }

        }
    )
);
