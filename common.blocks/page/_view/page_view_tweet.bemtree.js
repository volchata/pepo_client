block('page').mod('view', 'tweet').content()(function () {

    return [
        {
            elem: 'body',
            elemMods: {tweet: true},
            data: this.data.tweet_data,
            content: [
                {
                    block: 'tweet'
                }
            ]
        },
        {
            block: 'comments'
        }
    ];
});
