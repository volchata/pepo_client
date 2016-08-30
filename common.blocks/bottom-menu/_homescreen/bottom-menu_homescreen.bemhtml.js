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
                    text : 'Home',
                    mods: { type: 'homescreen' },
                    icon: {
                        block: 'icon',
                        mods: { home: true }
                    }
                },
                {
                    val : 2,
                    text : 'Notifications',
                    mods: { type: 'homescreen' },
                    icon: {
                        block: 'icon',
                        mods: { bell: true }
                    }
                },
                {
                    val : 3,
                    text : 'Messages',
                    mods: { type: 'homescreen' },
                    icon: {
                        block: 'icon',
                        mods: { message: true }
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
