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
                        url: '/desktop.blocks/bottom-menu/img/home.svg'
                    }
                },
                {
                    val : 2,
                    text : 'Notifications',
                    mods: { homescreen: true },
                    icon: {
                        block: 'icon',
                        url: '/desktop.blocks/bottom-menu/img/bell.svg'
                    }
                },
                {
                    val : 3,
                    text : 'message',
                    mods: { homescreen: true },
                    icon: {
                        block: 'icon',
                        url: '/desktop.blocks/bottom-menu/img/message.svg'
                    }
                },
                {
                    val : 4,
                    text : 'account',
                    mods: { homescreen: true },
                    icon: {
                        block: 'icon',
                        url: '/desktop.blocks/bottom-menu/img/account.svg'
                    }
                }
            ]
        }
    )
);
