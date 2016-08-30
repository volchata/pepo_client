block('tweet').mod('default', true)(
    content()(
        function () {
            var data = this.ctx.content;

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
                        url: data.url
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
                                    mods: { id: true },
                                    content: data.login
                                }
                            ]
                        },
                        {
                            block: 'text',
                            mods: { time: true },
                            content: data.time
                        },
                        {
                            block: 'text',
                            mods: { main: true },
                            content: data.tweet_text
                        },
                        {
                            block: 'control-group',
                            content: ['reply', 'repost', 'like'].map(addCtlGrp)
                        },
                        {
                            block: 'comments'
                        }
                    ]
                }
            ];
        }
    )
);
