([{
    mustDeps: [
        { block: 'user-feed' },
        { block: 'user-item' },
        { block: 'input' },
        { block: 'button' },
        { elem: 'search-input' }
    ]
},
{

    tech: 'js',
    mustDeps: [
        {
            block: 'user-item',
            tech: 'bemhtml'
        }
    ]
}]);
