module.exports = {
    block: 'page',
    title: 'login',
    head: [{ elem: 'css', url: 'login.min.css' }],
    scripts: [{ elem: 'js', url: 'login.min.js' }],
    content: [
        {
            block: 'login',
            js: true,
            content: [
                {
                    block: 'input',
                    mix: { block: 'login', elem: 'input'},
                    mods: {theme: 'islands', size: 'l'},
                    placeholder: 'Придумай логин'
                },
                {
                    block : 'button',
                    mix: { block: 'login', elem: 'button'},
                    mods : {theme: 'islands', size: 'l', type : 'submit'},
                    text : 'Вход'
                }
            ] 
        }
    ]
};
