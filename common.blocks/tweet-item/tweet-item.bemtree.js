block('tweet-item')(
    content()(
        function () {

            var tweet = this.ctx.data.tweet;
            var user = this.ctx.data.user;

            var tweet_tree = [];

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
                    mods: { 'profile-link': true },
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

            var avatar_mods = { 'tweet-item': true };
            if (!user.avatar) {
                avatar_mods['no-avatar'] = true;
            }

            return [
                {
                    elem: 'left',
                    content: {
                        block: 'avatar',
                        mods: avatar_mods,
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
