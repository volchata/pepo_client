([
    {
        block: 'tweet',
        mustDeps: [
            { elem: 'actions' },
            { elem: 'right' }
        ]
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
            { block: 'button', mods: ['like', 'repost', 'reply'] },
            { block: 'icon', mods: ['like', 'repost', 'reply'] }
        ]
    }
])
