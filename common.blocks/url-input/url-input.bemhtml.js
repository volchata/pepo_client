block('url-input')(
    js()(true),
    content()(
        function () {

            return [
                {
                    elem: 'label',
                    content: 'URL'
                },
                {
                    block: 'input',
                    placeholder: 'https://www.yandex.ru/',
                    mods: {theme: 'islands', size: 'm'}
                },
                {
                    block: 'button',
                    mods: {theme: 'islands', size: 'm'},
                    text: ''
                },
                {
                    elem: 'container'
                }
            ];
        }
    )
);
