block('page').mod('view', 'tweet').content()(function () {

    var item_data = {},
        item_js = true,
        comment_data = { tweets: [], users: {}},
        comment_js = true;

    console.log(this.data);

    if (this.data) {
        item_data = {
            tweet: this.data.tweet,
            user: this.data.user
        };
        item_js = item_data;
    }

    if (this.data.tweet.extras.comments) {
        var comments = this.data.tweet.extras.comments;
        if (comments.tweets) {
            comment_data = this.data.tweet.extras.comments;

            comment_data.tweet = {
                _id: this.data.tweet._id
            };

            comment_js = comment_data;
            console.log(comment_js);
            //comment_js.tweet = this.data.tweet;
        }
    }

    return [
        {
            block: 'tweet-item',
            data: item_data,
            js: item_js
        },
        {
            block: 'tweet-feed',
            mods: [{ 'comments': true }],
            data: comment_data,
            js: comment_js
        }

    ];
});
