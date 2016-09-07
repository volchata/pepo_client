block('page').mod('view', 'wall').content()(function () {
    return [
        {
            block: 'body',
            content: {
                block: 'tweets',
                data: this.data.tweet_data
            }
        },
        {
            block: 'footer',
            content: {
                block: 'bottom-menu',
                mods: { homescreen: true }
            }
        }
    ];
});
