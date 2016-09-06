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
                    block: 'input',
                    mods: { theme: 'islands', size: 'm' },
                    text: 55.76
                }
            ];
        }
    )
);
