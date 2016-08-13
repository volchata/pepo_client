block('main-menu').elem('bottom').content()(
    {
        block : 'control-group',
        content : [
            {
                block : 'button',
                mods: { type: 'image-text'},
                icon: {
                    block: 'icon',
                    mix: { block: 'main-menu', elem: 'icon' },
                    url: '/desktop.git blocks/main-menu/img/home.svg'
                },
                text: 'Home'
            },
            {
                block : 'button',
                mods: { type: 'image-text'},
                icon: {
                    block: 'icon',
                    mix: { block: 'main-menu', elem: 'icon' },
                    url: '/desktop.blocks/main-menu/img/bell.svg'
                },
                text: 'Notifications'
            },
            {
                block : 'button',
                mods: { type: 'image-text'},
                icon: {
                    block: 'icon',
                    mix: { block: 'main-menu', elem: 'icon' },
                    url: '/desktop.blocks/main-menu/img/message.svg'
                },
                text: 'Messages'
            },
            {
                block : 'button',
                mods: { type: 'image-text'},
                icon: {
                    block: 'icon',
                    mix: { block: 'main-menu', elem: 'icon' },
                    url: '/desktop.blocks/main-menu/img/account.svg'
                },
                text: 'Account'
            }
        ]
    }
);
