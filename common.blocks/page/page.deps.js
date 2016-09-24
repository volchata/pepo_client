([
    {
        shouldDeps: [
            {
                mods: {
                    view: ['404', '500', 'wall', 'index', 'login', 'auth', 'signup', 'compose', 'profile',
                        'image-upload', 'users-search', 'profile-edit', 'account-edit', 'avatar-edit', 'tweet', 'vmap', 'single', 'feed', 'interest']
                }
            },
            { elem: 'body', elemMods: ['wall', 'comment', 'profile'] },
            { block: 'control-group', mods: { role: ['menu'] } },
            { block: 'button' }
        ]
    }
]);
