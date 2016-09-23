block('page')(
    js()(true),
    content()(
        {
            block: 'footer',
            content: {
                block: 'control-group',
                mods: { role: 'menu' },
                content: [
                    {
                        block: 'button',
                        url: '/compose/',
                        mods: { type: 'link', theme: 'islands', size: 'm' },
                        icon: {
                            block: 'icon',
                            mods: { tweet: true }
                        },
                        text: 'Твитнуть'
                    },
                    {
                        block: 'button',
                        url: '/feed/',
                        mods: { type: 'link', theme: 'islands', size: 'm' },
                        icon: {
                            block: 'icon',
                            mods: { home: true }
                        },
                        text: 'Домой'
                    },
                    {
                        block: 'button',
                        url: '/users-search/',
                        mods: { type: 'link', theme: 'islands', size: 'm' },
                        icon: {
                            block: 'icon',
                            mods: { search: true }
                        },
                        text: 'Поиск'
                    },
                    {
                        block: 'button',
                        url: '/profile/',
                        mods: { type: 'link', theme: 'islands', size: 'm' },
                        icon: {
                            block: 'icon',
                            mods: { account: true }
                        },
                        text: 'Профиль'
                    }
                ]
            }
        }
    )
);
