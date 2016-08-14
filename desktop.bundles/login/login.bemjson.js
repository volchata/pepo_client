module.exports = {
    block: 'page',
    title: 'Log in',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : 'login.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'login.min.js' }],
    content: [
        {
            block: 'login'
        }
    ]
};
