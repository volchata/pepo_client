([
    {
        block: 'tweet',
        mustDeps: [
            {elem: ['like', 'repost', 'reply', 'right', 'left', 'url', 'image', 'geo', 'header']},
            {block: 'button', mods: ['enabled']},
            {block: 'tweet-attachment'},
            {block: 'link', mods: {plaintext: true}},
            {mods: ['default', 'comment']},
            {block: 'text', mods: ['id', 'username']}
        ]
    },
    {
        elem: 'left',
        mustDeps: [
            {block: 'image'},
            {block: 'image', mods: {type: 'tweet'}}
        ]
    },
    {
        elem: 'right',
        shouldDeps: [
            { block: 'control-group' },
            { block: 'link', mods: { plaintext: true } },
            { block: 'icon', mods: ['like', 'repost', 'reply'] },
            {
                block: 'vmap'

            }
        ]
    },
    {
        mods: 'comment',
        mustDeps: [
            {elem: ['right', 'left']}
        ]
    },
    {
        tech: 'js',
        shouldDeps: [
            {block: 'tweet', mods: {default: true}, tech: 'bemhtml'}
        ]
    }
]);
