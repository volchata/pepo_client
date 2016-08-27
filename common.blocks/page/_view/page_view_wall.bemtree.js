block('page').mod('view', 'wall').content()(function () {
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
            content: [
                {
                    block: 'tweet',
                    mods: { default: true },
                    data: this.data.tweet_data
                }
            ]
        },
        {
            elem: 'footer',
            content: {
                block: 'bottom-menu',
                mods: { homescreen: true }
            }
        }
    ];
});
