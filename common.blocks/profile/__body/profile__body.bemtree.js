block('profile').elem('body')(
    content()(
        function () {
            return {
                block: 'control-group',

                content: ['pep', 'picture', 'like'].map(function (v) {
                    var add_btns = {
                        block: 'button',
                        mix: { block: 'profile', elem: 'button' },
                        mods: { theme: 'simple', size: 'm' },
                        icon: {
                            block: 'icon',
                            mods: {}
                        }
                    };

                    add_btns.mods[v] = true;
                    add_btns.icon.mods[v] = true;

                    return add_btns;
                })
            };
        }
    )
);
