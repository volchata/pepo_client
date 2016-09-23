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

    var bem_object = [
        {
            block: 'tweet-feed',
            mods: [{ drawer: true }],
            mix: {
                block: 'vmap-loader',
                js: true
            },
            data: data,
            js: js
        }
    ];

    bem_object.push(applyNext());

    return bem_object;
});
