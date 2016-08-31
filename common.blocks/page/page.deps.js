([
    {
        shouldDeps: [
            {
                mods: { view: ['404', 'wall', 'index', 'login', 'auth', 'signup', 'compose', 'profile', '500'] }
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
