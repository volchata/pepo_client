([
    {
        shouldDeps: [
            {
                block: 'top-menu',
                mods: { layout: 'main' }
            },
            {
                block: 'tweets'
            },
            {
                block: 'tweet-drawer'
            },
            {
                block: 'bottom-menu',
                mods: { homescreen: true }
            }
        ]
    },
    {
        tech: 'js',
        shouldDeps: [
            {
                block: 'tweet',
                mods: { default: true },
                tech: 'bemhtml'
            }
        ]
    }]);
