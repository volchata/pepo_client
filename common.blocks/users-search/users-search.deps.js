([{
    mustDeps: [
        { block: 'user-feed' },
        { block: 'user-item' },
        { block: 'input' },
        { block: 'button' },
        { elem: 'search-input' },
        {
            block: 'spin',
            mods: {
                theme: 'islands',
                size: 'l',
                visible: true
            }
        }
    ]
},
{

    tech: 'js',
    mustDeps: [
        {
            block: 'user-item',
            tech: 'bemhtml'
        },
        {
            block: 'spin',
            mods: {
                theme: 'islands',
                size: 'l',
                visible: true
            },
            tech: 'bemhtml'
        }
    ]
}]);
