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
                    block: "input",
                    mods : { theme : 'islands', size : 'm' },
                    text: 37.64
                }
            ];
        }
    )
);
