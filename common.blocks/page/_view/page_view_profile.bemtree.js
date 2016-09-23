block('page').mod('view', 'profile')(
    content()(function () {
        var bem_object = [
            {
                block: 'profile',
                mix: {
                    block: 'vmap-loader',
                    js: true
                },
                js: true
            }
        ];

        bem_object.push(applyNext());

        return bem_object;
    })
);
