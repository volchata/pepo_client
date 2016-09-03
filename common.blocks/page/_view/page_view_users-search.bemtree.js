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
            elem: 'search',
            content: {
                block: 'search-results'
            }
        }
    ];
});
