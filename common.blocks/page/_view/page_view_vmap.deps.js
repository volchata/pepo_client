([
    {
        shouldDeps: [
            {
                block: 'top-menu',
                mods: { layout: 'main' }
            },
            {
                block: 'tweet',
                mods: { default: true }
            },
            {
                block: 'tweet-drawer'
            },
            {
                block: 'bottom-menu',
                mods: { homescreen: true }
            },
            {
                block: 'vmap-loader'
            },
            {
                block: 'vmap'
            }
        ]
    },
    {
        tech: 'js',
        shouldDeps: {
            block: 'tweet',
            mods: { default: true },
            tech: 'bemhtml'
        }
    }
]);
