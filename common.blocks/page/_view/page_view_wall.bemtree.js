block('page').mod('view', 'wall').content()(function () {
    return [
        {
            block: 'body',
            content: {
                block: 'tweets',
                mods: { display: 'default' },
                data: this.data.tweet_data
            }
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
