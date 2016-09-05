([
    {
        block: 'user-info',
        mustDeps: [
            {elem: ['header', 'body', 'edit', 'footer', 'text']}
        ]
    },
    {
        elem: 'edit',
        mustDeps: [
            {block: 'textarea', mods: {theme: 'islands', size: 'm'}}
        ]
    },
    {
        elem: 'body',
        mustDeps: [
            {block: 'text', mods: {main: true}}
        ]
    },
    {
        elem: 'header',
        mustDeps: {
            block: 'top-menu', mods: {layout: 'main'}
        }
    },
    {
        elem: 'footer',
        mustDeps: {block: 'bottom-menu', mods: {accept: true}}
    }
]);
