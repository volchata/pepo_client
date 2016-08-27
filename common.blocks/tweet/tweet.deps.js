([
    {
        block: 'tweet',
        mustDeps: { elem: ['like', 'repost', 'reply', 'right', 'actions'] }
    },
    {
        elem: 'left',
        mustDeps: [
            { block: 'image' },
            { block: 'avatar', mods: { type: 'tweet' } }
        ]
    },
    {
        elem: 'right',
        shouldDeps: [
            { block: 'account-info' },
            { block: 'control-group' },
            { block: 'icon', mods: ['like', 'repost', 'reply'] }
        ]
    }
])
