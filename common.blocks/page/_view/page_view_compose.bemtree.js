block('page').mod('view', 'compose').content()(function () {
    var data = {};
    var js = true;

    if (this.data)
    {
        data = this.data.tweet_data;
        js = data;
    }

    return [
        {
            block: 'compose-block',
            data: data,
            js: js
        }
    ];
});
