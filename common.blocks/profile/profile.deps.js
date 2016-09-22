({
    shouldDeps: [
        { block: 'mini-stat' },
        { block: 'about-user' },
        { block: 'subscriber' }
    ],
    mustDeps: [
        { block: 'avatar', mods: ['no-avatar', 'profile'] },
        { elem: ['tweetSample', 'controls'] }
    ]
});
