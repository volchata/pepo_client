block('bottom-menu')(
    mod('accept', 'true'),
    content()(
        {
            block: 'control-group',
            content: [
                {
                    block: 'button',
                    mods: { theme: 'blue', 'no': true },
                    text: 'Cancel'
                },
                {
                    block: 'button',
                    mods: { theme: 'blue', 'yes': true },
                    text: 'Accept'
                }
            ]
        }
    )
);
