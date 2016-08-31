block('tweet').mod('comment', true)(
    content()(
        function () {
            function addCtlGrp(value) {
                var add_btns = {
                    block: 'button',
                    mix: { block: 'tweet', elem: value },
                    text: '',
                    icon: {
                        block: 'icon',
                        mods: {}
                    }
                };

                add_btns.icon.mods[value] = true;

                return add_btns;
            }

            return [
                {
                    elem: 'left',
                    content: {
                        block: 'image',
                        mix: { block: 'avatar', mods: { type: 'tweet' } },
                        url: 'https://media0.giphy.com/media/LxSFsOTa3ytEY/200_s.gif'
                    }
                },
                {
                    elem: 'right',
                    content: [
                        {
                            block: 'account-info',
                            content: [
                                {
                                    block: 'text',
                                    mods: { username: true }
                                    // content: data.lastName + ' ' + data.firstName
                                },
                                {
                                    block: 'text',
                                    mods: { id: true }
                                }
                            ]
                        },
                        {
                            block: 'text',
                            mods: { time: true }
                        },
                        {
                            block: 'text',
                            mods: { main: true }
                        },
                        {
                            block: 'control-group',
                            content: ['reply', 'repost', 'like'].map(addCtlGrp)
                        }
                    ]
                }
            ];
        }
    )
);
