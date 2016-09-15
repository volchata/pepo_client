block('compose-menu')(
    js()(true),
    content()(
        function () {

            return [
                {
                    elem: 'left',
                    content: {
                        block: 'control-group',
                        content: ['photo', 'geo', 'url'].map(function (v, i, content) {
                            var button = {
                                block: 'button',
                                mods: {attach: v, theme: 'islands', size: 's'},
                                mix: {block: 'compose-btn'},
                                icon: {
                                    block: 'icon',
                                    mods: {}
                                }

                            };

                            button.icon.mods[content[i]] = true;
                            return button;
                        })
                    }
                },
                {
                    elem: 'right',
                    content: {
                        block: 'control-group',
                        content: {
                            block: 'button',
                            mods: { theme: 'islands', size: 'm', type: 'submit'},
                            mix: {block: 'send-tweet-btn'},
                            text: 'Твитнуть'
                        }
                    }
                }
            ];
        }
    )
);
