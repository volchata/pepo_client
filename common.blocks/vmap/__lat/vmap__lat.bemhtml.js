block('vmap').elem('lat')(
    js()(true),
    content()(
        function () {
            return [
                {
                    elem: 'label',
                    content: 'Lat'
                },
                {
                    block: 'coord',
                    mods: {status: ['edit']}
                }
            ];
        }
    )
);
