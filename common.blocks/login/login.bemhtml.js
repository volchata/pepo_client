block('login')(
    tag()('form'),
    js()(true),
    content()(
        [
            {
                block: 'input',
                mix: {block: 'login', elem: 'input'},
                mods: {theme: 'islands', size: 'l'},
                placeholder: 'Придумай логин'
            },
            {
                block: 'button',
                mix: {block: 'login', elem: 'button'},
                mods: {theme: 'islands', size: 'l', type: 'button'},
                text: 'Вход'
            }
        ]
    )
);
