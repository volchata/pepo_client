module.exports = {
    block : 'page',
    title : 'Wall',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : 'wall.min.css' },
        { elem: 'js', url: 'wall.bemhtml.js' }
    ],
    scripts: [{ elem : 'js', url : 'wall.min.js' }],
    mods : { theme : 'islands' },
    content : [
        {
            block: 'tweet'
        },
        {
            block: 'tweet'
        },
        {
            block: 'tweet'
        },
        {
            block: 'tweet'
        },
        {
            block: 'tweet'
        },
        {
            block: 'bottom-menu',
            mods: { homescreen: true }
        }
    ]
};
