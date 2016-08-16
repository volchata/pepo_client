([
    {
        block: 'bottom-menu',
        mustDeps: [
            { block: 'control-group' },
            { block: 'image' },
            { block: 'icon' }
        ]
    },

    {
        mod: 'accept',
        mustDeps: [
            { block: 'button', mods: { 'disabled': true, theme: 'blue', 'yes': true, 'no': true } }
        ]
    }
])
