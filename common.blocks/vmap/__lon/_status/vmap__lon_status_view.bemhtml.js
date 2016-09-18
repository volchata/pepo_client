block('vmap').elem('lon').mod('status', 'view')(
    js()(true),
    content()(
        function () {
            return [
                {
                    elem: 'label',
                    content: 'Lon'
                },
                {
                    block: 'text'

                }
            ];
        }
    )
);
