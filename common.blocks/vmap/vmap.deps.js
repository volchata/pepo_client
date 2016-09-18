({
    mustDeps: [
        { elem: 'view'},
        { elem: 'lat', mods: {status: ['view']}},
        { elem: 'lon'},
        { elem: 'search'},
        { elem: 'add'},
        { elem: 'ctrls'},
        { elem: 'coord'},
        { elem: 'label'},
        {
            mods: {
                status: ['view', 'edit']
            }
        }
    ]
});
