block('page').mod('view', 'users-search').content()(function () {
    return [
        {
            elem: 'header',
            content: {
                block: 'top-menu',
                mods: { layout: 'users-search' }
            }
        },
        {
            elem: 'body',
            content: {
                block: 'search-results'
            }
        }
    ];
});
