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
                    block: "input",
                    label: "https://www.yandex.ru/",
                    mods : { theme : 'islands', size : 'm' }
                },
                {
                    block: 'button',
                    mods: {snapshot: 'url'},
                    text: "Прикрепить",
                    js: true
                }
            ];
        }
    )
);
