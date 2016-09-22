block('page').mod('view', 'profile')(
    content()(function () {
        return [
            {
                block: 'profile',
                mix: {
                    block: 'vmap-loader',
                    js: true
                },
                js: true
            }
        ];
    })
);
