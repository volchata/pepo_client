block('page').mod('view', 'feed').content()(function () {
    var data = {};
    var js = true;

    if (this.data) {
        data = {
            tweets: this.data.tweets,
            users: this.data.users
        };
        js = data;
    }

    return [
        {
            block: 'tweet-feed',
            data: data,
            js: js
        }
    ];
});