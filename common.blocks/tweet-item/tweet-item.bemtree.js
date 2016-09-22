block('tweet-item')(
    content()(
        function () {

            var tweet = this.ctx.data.tweet;
            var user = this.ctx.data.user;

            var tweet_tree = [];

            console.log(tweet.extras);

            if (tweet.extras.commentedTweetId) {
                tweet_tree.push({
                    elem: 'reply-info',
                    data: { tweet: { _id: tweet.extras.commentedTweetId }}
                });
            }

            tweet_tree.push(
                {
                    elem: 'time',
                    data: { tweet: tweet }
                },
                {
                    block: 'about-user',
                    data: { user: user }
                },
                {
                    elem: 'tweet-body',
                    data: { tweet: tweet }
                },
                {
                    elem: 'controls',
                    data: { tweet: tweet }
                }
            );

            return [
                {
                    elem: 'left',
                    content: {
                        block: 'avatar',
                        mods: { 'tweet-item': true },
                        data: { user: user }
                    }
                },
                {
                    elem: 'right',
                    content: tweet_tree
                }
            ];
        })
);
