block('top-menu')(
    js()(true),
    mod('layout', 'main').replace()(
        {
            block: 'top-menu',
            buttons: [
                { name: 'back-button' },
                { name: 'tweet-button' },
                { name: 'search-button' }
            ]
        }
    ),
    mod('layout', 'plain').replace()(
        {
            block: 'top-menu',
            buttons: [
                { name: 'back-button' }
            ]
        }
    ),
    content()(function () {
        return [
            this.ctx.buttons.map(function (button) {
                return {
                    block: 'button',
                    mods: { theme: 'islands', size: 'm', view: 'plain', air: true },
                    mix: { block: 'top-menu', elem: button.name },
                    icon: {
                        block: 'icon'
                    }
                };
            }),
            {
                block: 'input',
                mods: {theme: 'islands', size: 'l'},
                placeholder: 'Поиск'
            }
        ];
    })
);
