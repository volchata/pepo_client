block('user-info')(
    content()(
        [
            {
                elem: 'header',
                content: {
                    block: 'top-menu',
                    mods: { layout: 'main' }
                }
            },
            {
                elem: 'body',
                content: [
                    {
                        block: 'text',
                        mix: { block: 'user-info', elem: 'text'},
                        content: 'Расскажите о себе'
                    },
                    {
                        block: 'text',
                        mix: { block: 'user-info', elem: 'text'},
                        mods: { main: true },
                        content: 'Чем вы отличаетесь от других?'
                    }
                ]
            },
            {
                elem: 'edit',
                content: [
                    {
                        block: 'text',
                        content: 'О себе'
                    },
                    {
                        block: 'textarea',
                        mods: { theme: 'islands', size: 'm', 'has-clear': true },
                        placeholder: 'Перечислите интересы'
                    }
                ]
            },
            {
                elem: 'footer',
                content: {
                    block: 'bottom-menu',
                    mods: { accept: true }
                }
            }
        ]
    )
);
