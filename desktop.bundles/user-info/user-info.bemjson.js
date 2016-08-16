module.exports = {
    block : 'page',
    title : 'Wall',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : 'user-info.min.css' },
        { elem: 'js', url: 'user-info.bemhtml.js' }
    ],
    scripts: [{ elem : 'js', url : 'user-info.min.js' }],
    mods : { theme : 'islands' },
    content : [
        {
            block: 'user-info',
            mods: { type: 'add' }
        },
        {
            block: 'bottom-menu',
            mods: { accept: true }
        }
    ]
};
