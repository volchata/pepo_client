block('page').mod('view', 'compose').content()(function() {
    var data = {};
    var js = true;

    if (this.data)
    {
        data = this.data.tweet_data;
        js = data;
    }

    return [
        {
            elem: 'header',
            content: {
                block: 'top-menu',
                mods: { layout: 'main' }
            }
        },
        {
            block: 'compose-block',
            data: data,
            js: js
        }
    ];
});
