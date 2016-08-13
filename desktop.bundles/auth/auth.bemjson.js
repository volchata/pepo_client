module.exports = {
    block : 'page',
    title : 'Authorization',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : 'auth.min.css' }
    ],
    scripts: [{ elem : 'js', url : 'auth.min.js' }],
    mods : { theme : 'islands' },
    content : [
        {
            block: 'header',
            mix: { block: 'auth', elem: 'header' },
            content: [
                {
                    block: 'link',
                    url: '#',
                    content: [
                        {
                            block: 'image',
                            url: 'https://g.twimg.com/about/feature-corporate/image/twitterbird_RGB.png',
                            title: 'Homepage'
                        },
                        {
                            block: 'text',
                            content: 'Войти'
                        }
                    ]
                }
            ]
        },
        {
            block: 'body',
            mix: { block: 'auth', elem: 'body' },
            content: [
                {
                    block: 'button',
                    content: [
                        {
                            block: 'image',
                            url: 'https://lh3.googleusercontent.com/J6D9mWf68uxE0sTyVw3QKsEqCKR7XKe8EaYZUbCwas8h1z_qQYlL34ci79Vllqc81CqQ=w300'
                        },
                        'Enter with VK'
                    ]
                }
            ]
        },
        {
            block: 'footer'
        }
    ]
};
