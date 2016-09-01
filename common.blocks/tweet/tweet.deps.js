([
    {
        block: 'tweet',
        mustDeps: [
            { elem: ['like', 'repost', 'reply', 'right', 'left', 'actions'] },
            { block: 'button', mods: ['enabled'] },
            { block: 'link', mods: { plaintext: true } },
            { mods: ['default', 'comment'] }
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
            { block: 'icon', mods: ['like', 'repost', 'reply'] }
        ]
    },
    {
        mods: 'comments',
        mustDeps: { block: 'comments' }
    }
])
