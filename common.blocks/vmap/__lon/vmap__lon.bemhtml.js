block('vmap').elem('lon')(
    js()(true),
    content()(
        function () {
            return [
                {
                    elem: 'label',
                    content: 'Д'
                },
                {
                    block: 'coord',
                    mods: {status: ['edit']}

                }
            ];
        }
    )
);
