([
    {
        block: 'user-info',
        mustDeps: [
            { elem: 'edit' }
        ]
    },
    {
        elem: 'edit',
        mustDeps: [
            { block: 'input', mods: { theme: 'islands', size: 'm', 'has-clear': true }}
        ]
    }
])
