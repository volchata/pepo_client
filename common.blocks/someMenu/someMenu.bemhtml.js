block('someMenu')(
    content()(
        function () {
            return [
                {
                    block: 'checkbox',
                    mods: { theme: 'simple', size: 'm', type: 'button' },
                    text: '',
                    icon: {
                        block: 'icon',
                        mods: { menu: true }
                    }
                },
                {
                    block: 'hidden-menu'
                }
            ];
        }
    )
);
