block('comments')(
    content()(function () {
        var tweet_data = this.data.tweet_data,
            users = tweet_data.users,
            tweet_in = tweet_data.tweets,
            comments = tweet_in[0].extras.comments;

        comments = comments.map(function (v) {

            if (!v.extras)
            {
                v.extras = {};
            }

            return {
                block: 'tweet',
                mods: { default: true },
                content: {
                    avatar: users[v.author].avatar,
                    login: '@' + users[v.author].displayName,
                    tweet_text: v.content,
                    url: '/tweet/' + v._id,
                    extras: v.extras,
                },
                js: {
                    data: v
                }
            };
        });

        return comments;
    })
);
