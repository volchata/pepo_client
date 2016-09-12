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

            return tweet_feed;

        })
);
