([
    {
        shouldDeps: [
            {
                mods: { view: ['404', '500', 'wall', 'index', 'login', 'auth', 'signup', 'compose', 'profile', 'image-upload', 'users-search'] }
            },
            { elem: 'body', elemMods: { wall: true } }
        ]
    },
    {
        mod: { view: 'wall' },
        mustDeps: [
            { block: 'comments' }
        ]
    }
])

