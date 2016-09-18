block('page').mod('view', 'compose').content()(function () {
    var data = {};
    var js = true;

    if (this.data) {
        data = this.data.tweet_data;
        js = data;
    }

    return [
        {
            block: 'compose-block',
            mix: {
                block: 'vmap-loader',
                js: true
            },
            data: data,
            js: js
        }
    ];
});
