block('page').mod('view', 'tweet').content()(function () {

    return [
        {
            elem: 'header',
            content: {
                block: 'top-menu',
                mods: { layout: 'main' }
            }
        },
        {
            elem: 'body',
            elemMods: { tweet: true },
            data: this.data.tweet_data,
            content: [
                {
                    block: 'tweet'
                }
            ]
        },
        {
            block: 'comments'
        }
    ];
});
