([
    {
        block: 'tweet',
        mustDeps: [
            { elem: ['like', 'repost', 'reply', 'right', 'left', 'url', 'image', 'geo'] },
            { block: 'button', mods: ['enabled'] },
<<<<<<< 662e40a0254a4d90d66bbe23f5203ffba5cec5dc
            { block: 'tweet-attachment'},
            { block: 'link', mods: { plaintext: true } },
            { mods: ['default', 'comment'] }
=======
            { block: 'text', mods: ['id', 'username'] }
>>>>>>> фиксы по оформлению
        ]
    },
    {
        elem: 'left',
        mustDeps: [
            { block: 'image' },
            { block: 'image', mods: { type: 'tweet' } }
        ]
    },
    {
        elem: 'right',
        shouldDeps: [
            { block: 'control-group' },
            { block: 'link', mods: { plaintext: true } },
            { block: 'icon', mods: ['like', 'repost', 'reply'] }
        ]
<<<<<<< 662e40a0254a4d90d66bbe23f5203ffba5cec5dc
    },
    {
        mods: 'comment',
        mustDeps: [
            { elem: ['right', 'left'] }
        ]
    },
    {
        tech: 'js',
        shouldDeps: [
            { block: 'tweet', mods: { default: true }, tech: 'bemhtml' }
        ]
=======
>>>>>>> фиксы по оформлению
    }
])
