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
                    mods: { default: true }
                },
                {
                    block: 'tweet',
                    mods: { default: true }
                },
                {
                    block: 'tweet',
                    mods: { default: true }
                },
                {
                    block: 'tweet',
                    mods: { default: true }
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
