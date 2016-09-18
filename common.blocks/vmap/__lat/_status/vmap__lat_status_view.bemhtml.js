block('vmap').elem('lat').mod('status', 'view')(
    js()(true),
    content()(
        function () {
            return [
                {
                    elem: 'label',
                    content: 'Lat'
                },
                {
                    block: 'text'

                }
            ];
        }
    )
);
