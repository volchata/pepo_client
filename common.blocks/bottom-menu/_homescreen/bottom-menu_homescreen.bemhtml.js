block('bottom-menu')(
    mod('homescreen', 'true'),
    content()(
        {
            block : 'radio-group',
            mods : { theme : 'islands', size : 'm', type : 'button' },
            name : 'radio-button',
            options : [
                {
                    val : 1,
                    text : 'Home',
                    mods: { homescreen: true },
                    icon: {
                        block: 'icon',
                        mods: { home: true }
                    }
                },
                {
                    val : 2,
                    text : 'Notifications',
                    mods: { homescreen: true },
                    icon: {
                        block: 'icon',
                        mods: { bell: true }
                    }
                },
                {
                    val : 3,
                    text : 'Messages',
                    mods: { homescreen: true },
                    icon: {
                        block: 'icon',
                        mods: { message: true }
                    }
                },
                {
                    val : 4,
                    text : 'Account',
                    mods: { homescreen: true },
                    icon: {
                        block: 'icon',
                        mods: { account: true }
                    }
                }
            ]
        }
    )
);
