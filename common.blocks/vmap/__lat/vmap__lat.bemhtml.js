block('vmap').elem('lat')(
    js()(true),
    content()(
        function () {
            return [
                {
                    elem: 'label',
                    content: 'Ш'
                },
                {
                    block: 'coord',
                    mods: {status: ['edit']}
                }
            ];
        }
    )
);
