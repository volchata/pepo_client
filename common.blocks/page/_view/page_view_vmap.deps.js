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
                block: 'vmap-loader',
            },
            {
                block: 'vmap',
            }


        ]
    },
    {
        tech: "js",
        shouldDeps: [
            {
                block: 'tweet',
                mods: { default: true },
                tech: 'bemhtml'
            }
        ]
    }])

/*
 ({
 shouldDeps: [
 {
 block: 'top-menu',
 mods: { layout: 'main' }
 },
 {
 block: 'vmap-loader'
 },
 {
 block: 'vmap'
 }
 ]
 <<<<<<< e0c26de33f2d5ecbd79c70665d9b92c025506600
 })
 */

