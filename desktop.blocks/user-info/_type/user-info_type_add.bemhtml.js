block('user-info')(
    mod('type', 'add'),
    content()(
        [
            {
                elem: 'edit',
                content: [
                    {
                        block: 'text',
                        content: 'About you'
                    },
                    {
                        block: 'input',
                        mods: { theme: 'islands', size: 'm', 'has-clear': true },
                        placeholder: 'Enter something about you'
                    }
                ]
            }
        ]
    )
)
