block('page').mod('view', 'tweet').content()(function () {

    return [
        {
            block: 'body',
            content: [
                {
                    block: 'tweet',
                    data: this.data.tweet_data
                }
            ]
        },
        {
            block: 'comments'
        }
    ];
});
