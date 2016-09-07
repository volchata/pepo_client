block('page').mod('view', 'profile')(
    content()(function () {
        return [
            {
                block: 'header',
                content: {
                    block: 'profile'
                }
            },
            {
                block: 'body',
                content: {
                    block: 'tweets'
                }
            },
            {
                block: 'footer'
            }
        ];
    })
);
