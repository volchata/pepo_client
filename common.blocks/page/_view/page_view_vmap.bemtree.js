block('page').mod('view', 'vmap').content()(function () {
    return [
        {
            elem: 'body',
            elemMods: { wall: true },
            mix: {
                block: 'vmap-loader',
                js: true
            },
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
                mods: { homescreen: true }
            }
        }
    ];
});
