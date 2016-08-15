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
            block: 'body',
            mix: { block: 'auth', elem: 'body' },
            content: [
                {
                    block: 'social-buttons'
                }
            ]
        },
        {
            block: 'footer'
        }
    ]
};
