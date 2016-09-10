block('page').mod('view', 'vmap').content()(function () {
    return [
 /*       {
            elem: 'body',
            elemMods: { wall: true },
            mix: {
                block: 'vmap-loader',
                js: true
            },
            data: this.data.tweet_data,
            content: [
                {
                    block: 'tweets'
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
*/
        {
            block: 'body',
            mix: {
                block: 'vmap-loader',
                js: true
            },
            content: {
                block: 'tweets',
                data: this.data.tweet_data
            }
        },
        {
            block: 'footer',
            content: {
                block: 'bottom-menu',
                mods: { homescreen: true }
            }
        }
    ];
});
