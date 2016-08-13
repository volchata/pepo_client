block('social-buttons')(
    content()(
        [
            {
                elem: "wrap",
                content:
                [
                    {
                        block: 'button',
                        mix: {block: 'social-buttons'},
                        mods: {social: 'vk'},
                        text: 'Войти через VK',
                        icon: {
                            block: 'icon',
                            mix: {block: 'social-buttons', elem: 'icon'},
                            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/VK.com-logo.svg/1024px-VK.com-logo.svg.png'
                        }
                    },
                    {
                        block: 'button',
                        mix: {block: 'social-buttons'},
                        mods: {social: 'facebook'},
                        text: 'Войти через Facebook',
                        icon: {
                            block: 'icon',
                            mix: {block: 'social-buttons', elem: 'icon'},
                            url: 'http://designadvice.ru/wp-content/uploads/2016/05/fb-1.png'
                        }
                    }
                ]
            }
        ]
    )
);
