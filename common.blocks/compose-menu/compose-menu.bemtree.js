block('compose-menu')(
    content()(
        function () {


            return [
                {
                    elem: 'left',
                    content: {
                        block: 'control-group',
                        content: ['photo', 'geo', 'link'].map(function (v, i, content) {
                            var button = {
                                block: 'button',
                                mods: {},
                                mix: { block: 'compose-btn', elem: 'button' },
                                icon: {
                                    block: 'icon',
                                    mods: {}
                                }

                            };

                            button.icon.mods[content[i]] = true;
//                            button.content = 'hi';

                            return button;
                        })
                    }
                },
                {
                    elem: 'right',
                    content: {
                        block: 'button',
                        mix: { block: "send-tweet-btn" },
                        mods: { disabled: true },
                        text: "Твитнуть"
                    }
                }
            ];
        }
    )
);

