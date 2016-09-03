block('bottom-menu')(
    mod('homescreen', true),
    content()(
        {
            block : 'radio-group',
            mods : { theme : 'islands', size : 'm', type : 'button' },
            name : 'radio-button',
            options : [
                {
                    val : 1,
                    text : 'Add tweet',
                    mods: { type: 'homescreen' },
                    icon: {
                        block: 'icon',
                        mods: { 'tweet': true }
                    }
                },
                {
                    val : 2,
                    text : 'Home',
                    mods: { type: 'homescreen' },
                    icon: {
                        block: 'icon',
                        mods: { home: true }
                    }
                },
                {
                    val : 3,
                    text : 'Search',
                    mods: { type: 'homescreen' },
                    icon: {
                        block: 'icon',
                        mods: { search: true }
                    }
                },
                {
                    val : 4,
                    text : 'Account',
                    mods: { type: 'homescreen' },
                    icon: {
                        block: 'icon',
                        mods: { account: true }
                    }
                }
            ]
        }
    )
);
