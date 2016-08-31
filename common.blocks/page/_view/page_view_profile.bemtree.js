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
                    mix: { elem: 'multiline' },
                    content: [
                        {
                            block: 'text',
                            mods: {username: true},
                            content: JSON.stringify(this.data.profile_data)
                        },
                        {
                            block: 'text',
                            mods: {id: true},
                            content: '@' + this.data.profile_data.displayName
                        }
                    ]
                },
                {
                    elem: "stats",
                    stats: [
                        {
                            title: 'Читает',
                            value: this.data.profile_data.friends
                        },
                        {
                            title: 'Читатели',
                            value: this.data.profile_data.followers
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
