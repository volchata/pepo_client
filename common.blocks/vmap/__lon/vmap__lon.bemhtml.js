block('vmap').elem('lon')(
    js()(true),
    content()(
        function () {
            return [
                {
                    elem: 'label',
                    content: 'Lon'
                },
                {
                    block: 'coord',
                    mods: {status: ['edit']}

                }
            ];
        }
    )
);
