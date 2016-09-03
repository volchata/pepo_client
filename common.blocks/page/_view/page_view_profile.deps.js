({
    shouldDeps: [
        {
            block: 'bottom-menu',
            mods: { homescreen: true }
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
            block: "account-info",
            mix: {elem: 'multiline'}
        }
    ]
})
