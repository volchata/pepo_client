({
    shouldDeps: [
        { block: 'mini-stat' },
        { block: 'about-user' },
        { block: 'subscriber' }
    ],
    mustDeps: [
        { block: 'avatar', mods: ['no-avatar', 'profile'] },
        { elem: ['tweetSample', 'controls'] },
        { block: 'radio-group', mods: {
            theme: 'islands',
            size: 'm',
            type: 'button',
            togglable: 'radio'
        }
        }
    ]
});
