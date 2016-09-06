block('page').mod('view', 'vmap').content()(function () {
    //this.data.profile_data

    return [
        {
            block: 'vmap-loader',
            js: true,
            content: [
                {
                    block: 'vmap'

                },
                {
                    block: 'vmap'
                }

            ]
        }
    ];
});
