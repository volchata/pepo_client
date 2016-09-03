block('page').mod('view', 'image-upload').content()(function() {
    return [
        {
            elem: 'header',
            content: {
                block: 'top-menu',
                mods: { layout: 'main' }
            }
        },
        {
            block: 'image-upload'
        }
    ];
});
