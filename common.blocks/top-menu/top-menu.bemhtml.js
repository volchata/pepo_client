block('top-menu')(
    js()(true),
    mod('layout', 'main').replace()(
        {
            block: 'top-menu',
            buttons: [
                { name: 'back-button' },
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
    mod('layout', 'users-search').replace()(
        {
            block: 'top-menu',
            mods: { "users-search": true },
            buttons: [
                { name: 'back-button' },
                { name: 'search-button' }
            ]
        }
    ),
    content()(function () {
        return [
            this.ctx.buttons.map(function (button) {
                return {
                    block: 'button',
                    mods: { theme: 'islands', size: 'm', view: 'plain', type: 'air' },
                    mix: { block: 'top-menu', elem: button.name },
                    icon: {
                        block: 'icon'
                    }
                };
            }),
            {
                block: 'input',
                mods: { theme: 'islands', size: 'l', 'has-clear': true, disabled: true },
                placeholder: 'Поиск'
            }
        ];
    })
);
