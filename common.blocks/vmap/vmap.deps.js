({

    mustDeps: [

        { elem: 'view', tech: 'bemhtml'},
        { elem: 'lat', mods: {status: ['view']}, tech: 'bemhtml'},
        { elem: 'lon', tech: 'bemhtml'},
        { elem: 'search', tech: 'bemhtml'},
        { elem: 'add', tech: 'bemhtml'},
        { elem: 'ctrls', tech: 'bemhtml'},
        { elem: 'coord', tech: 'bemhtml'},
        { elem: 'label', tech: 'bemhtml'},
        {
            mods: {
                status: ['view', 'edit']
            }
        }
    ]
});
