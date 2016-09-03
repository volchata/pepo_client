block('page').mod('view', 'compose').content()(function() {
    return [
        {
            elem: 'header',
            content: {
                block: 'top-menu',
                mods: { layout: 'main' }
            }
        },
        {
            block: 'compose-block'
        }
    ];
});
