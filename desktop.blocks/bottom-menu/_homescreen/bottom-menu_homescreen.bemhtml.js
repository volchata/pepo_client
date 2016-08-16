block('bottom-menu')(
    mod('homescreen', 'true'),
    content()(
        {
            block : 'control-group',
            content : [
                {
                    block : 'button',
                    mods: { homescreen: true },
                    icon: {
                        block: 'icon',
                        url: '/desktop.blocks/bottom-menu/img/home.svg'
                    },
                    text: 'Home'
                },
                {
                    block : 'button',
                    mods: { homescreen: true},
                    icon: {
                        block: 'icon',
                        url: '/desktop.blocks/bottom-menu/img/bell.svg'
                    },
                    text: 'Notifications'
                },
                {
                    block : 'button',
                    mods: { homescreen: true},
                    icon: {
                        block: 'icon',
                        url: '/desktop.blocks/bottom-menu/img/message.svg'
                    },
                    text: 'Messages'
                },
                {
                    block : 'button',
                    mods: { homescreen: true},
                    icon: {
                        block: 'icon',
                        url: '/desktop.blocks/bottom-menu/img/account.svg'
                    },
                    text: 'Account'
                }
            ]
        }
    )
);
