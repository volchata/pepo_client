module.exports = {
    block : 'page',
    title : 'Authorization',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : 'info.min.css' }
    ],
    scripts: [{ elem : 'js', url : 'info.min.js' }],
    mods : { theme : 'islands' },
    content : [
        {
            block: 'user-info'
        }
    ]
};
