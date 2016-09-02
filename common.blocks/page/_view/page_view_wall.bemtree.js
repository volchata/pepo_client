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
            elemMods: { wall: true },
            data: this.data.tweet_data,
            content: [
                {
                    block: 'tweet'
                }
            ]
        },
        {
            elem: 'footer',
            content: {
                block: 'bottom-menu',
                mods: { homescreen: true },

            }
        }
    ];
});
