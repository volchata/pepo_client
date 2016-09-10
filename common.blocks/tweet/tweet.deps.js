([
    {
        block: 'tweet',
        shouldDeps: [
            { elem: ['like', 'repost', 'reply', 'right', 'left', 'url', 'image', 'geo', 'header', 'controls'] },
            { block: 'button', mods: ['enabled'] },
            { block: 'tweet-attachment' },
            { block: 'vmap' }
        ]
    }
]);
