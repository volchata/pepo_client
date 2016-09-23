block('social-buttons').elem('wrap')(
    content()(
        [
            {
                block: 'button',
                mix: {block: 'social-buttons'},
                mods: {social: 'vk', type: 'link'},
                url: '/auth/vk',
                text: 'Войти через VK',
                icon: {
                    block: 'icon',
                    mix: {block: 'social-buttons', elem: 'icon'}
                }
            },
            {
                block: 'button',
                mix: {block: 'social-buttons'},
                mods: {social: 'facebook', type: 'link'},
                url: '/auth/fb',
                text: 'Войти через Facebook',
                icon: {
                    block: 'icon',
                    mix: {block: 'social-buttons', elem: 'icon'}
                }
            }
        ]
    )
);
