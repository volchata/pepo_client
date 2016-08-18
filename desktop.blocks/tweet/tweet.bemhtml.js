block('tweet')(
    content()(
        [
            {
                elem: 'left',
                content: {
                    block: 'image',
                    mix: { block: 'avatar', mods: { type: 'tweet'} },
                    url: 'http://image.flaticon.com/icons/svg/188/188993.svg'
                }
            },
            {
                elem: 'right',
                content: [
                    {
                        block: 'account-info'
                    },
                    {
                        block: 'text',
                        mods: { time: true },
                        content: '27 мин.'
                    },
                    {
                        block: 'text',
                        mods: { main: true },
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod' +
                        ' tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
                        'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
                        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
                        'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ' +
                        'officia deserunt mollit anim id est laborum'
                    },
                    {
                        block: 'control-group',
                        content: [
                            {
                                block: 'button',
                                icon: {
                                    block: 'icon',
                                    mix: { block: 'tweet', elem: 'icon' },
                                    url: '/desktop.blocks/tweet/img/arrow.svg'
                                }
                            },
                            {
                                block: 'button',
                                icon: {
                                    block: 'icon',
                                    mix: { block: 'tweet', elem: 'icon' },
                                    url: '/desktop.blocks/tweet/img/repost.svg'
                                },
                                text: '0'
                            },
                            {
                                block: 'button',
                                icon: {
                                    block: 'icon',
                                    mix: { block: 'tweet', elem: 'icon' },
                                    url: '/desktop.blocks/tweet/img/like.svg'
                                },
                                text: '0'
                            }
                        ]
                    }
                ]
            }
        ]
    )
)
