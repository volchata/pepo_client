({
    shouldDeps: [
        {
            block: 'top-menu',
            mods: { layout: 'main' }
        },
        { block: 'profile' },
        {
            block: "profile-header"
        },
        {
            block: "profile",
            elem: "stats"
        },
        {
            block: "profile",
            elem: 'controls'
        },
        {
            block: "account-info",
            mix: {elem: 'multiline'}
        },
        { block: 'tweet' }
    ]
})
