block('page').mod('view', 'profile').content()(function() {
    return [
        {
            block: 'profile',
            content: [
                {
                    block: "profile-header"
                },
                {
                    block: "account-info",
                    data: this.data.myData,
                    mix: { elem: 'multiline' }
                },
                {
                    elem: "stats",
                    stats: [
                        {
                            title: 'Читает',
                            value: '5'
                        },
                        {
                            title: 'Читатели',
                            value: '2'
                        }
                    ]
                },
                {
                    elem: "controls"
                }
            ]
        },
        { block: 'tweet' },
        { block: 'tweet' },
        { block: 'tweet' },
        { block: 'tweet' },
        { block: 'tweet' },
        { block: 'tweet' },
        { block: 'tweet' },
        { block: 'tweet' },
        { block: 'tweet' },
        { block: 'tweet' },
        { block: 'tweet' },
        { block: 'tweet' },
        { block: 'tweet' }
    ]
});
