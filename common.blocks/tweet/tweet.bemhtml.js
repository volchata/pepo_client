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
                        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
                    },
                    {
                        block: 'control-group',
                        content: [
                            {
                                block: 'button',
                                mix: { block: 'tweet', elem: 'button' },
                                icon: {
                                    block: 'icon',
                                    url: '/common.blocks/tweet/img/arrow.svg'
                                }
                            },
                            {
                                block: 'button',
                                mix: { block: 'tweet', elem: 'button' },
                                icon: {
                                    block: 'icon',
                                    url: '/common.blocks/tweet/img/repost.svg'
                                },
                                text: '0'
                            },
                            {
                                block: 'button',
                                mix: { block: 'tweet', elem: 'button' },
                                icon: {
                                    block: 'icon',
                                    url: '/common.blocks/tweet/img/like.svg'
                                },
                                text: '0'
                            }
                        ]
                    }
                ]
            }
        ]
    )
);
