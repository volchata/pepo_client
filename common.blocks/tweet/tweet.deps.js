([
    {
        block: 'tweet',
        mustDeps: [
            { elem: ['like', 'repost', 'reply', 'right', 'left', 'url', 'image', 'geo', 'header'] },
            { block: 'button', mods: ['enabled'] },
            { block: 'tweet-attachment' },
            { block: 'text', mods: ['id', 'username'] }
        ]
    },
    {
        elem: 'left',
        mustDeps: [
            { block: 'image', mods: { type: 'avatar' } },
            { block: 'about-user' }
        ]
    },
    {
        elem: 'right',
        shouldDeps: [
            { block: 'control-group' },
            { block: 'link', mods: { plaintext: true } },
            { block: 'icon', mods: ['like', 'repost', 'reply'] }
        ]
    },
    {
        tech: 'js',
        shouldDeps: [
            { block: 'tweet', mods: { default: true }, tech: 'bemhtml' }
        ]
    }
]);
