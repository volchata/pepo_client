([
    {
        block: 'bottom-menu',
        mustDeps: [
            {block: 'radio-group', mods: {type: 'button'}},
            {block: 'image'},
            {block: 'icon', mods: ['home', 'account', 'search', 'tweet']}
        ]
    },

    {
        mod: 'accept',
        mustDeps: [
            {block: 'button', mods: {'disabled': true, theme: 'blue', 'yes': true, 'no': true}}
        ]
    }
]);
