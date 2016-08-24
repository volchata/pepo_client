block('tweet')(
    content()(
        function () {
            var data = {
                tweet_text: 'someText',
                account_image_url: 'someUrl',
                account_name: 'account_name',
                user_name: 'user_name',
                time: 'current_time'
            };

            return [
                {
                    elem: 'left',
                    content: {
                        block: 'image',
                        mix: { block: 'avatar', mods: { type: 'tweet' } },
                        url: 'http://image.flaticon.com/icons/svg/188/188993.svg'
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
                                    mods: {username: true},
                                    content: data.user_name
                                },
                                {
                                    block: 'text',
                                    mods: {id: true},
                                    content: '@' + data.account_name
                                }
                            ]
                        },
                        {
                            block: 'text',
                            mods: {time: true},
                            content: data.time
                        },
                        {
                            block: 'text',
                            mods: {main: true},
                            content: data.tweet_text
                        },
                        {
                            block: 'control-group',
                            content: ['reply', 'repost', 'like'].map(function (v, i, content) {
                                var button = {
                                        block: 'button',
                                        mods: {},
                                        text: i,
                                        mix: { block: 'tweet', elem: 'button' },
                                        icon: {
                                            block: 'icon',
                                            mods: {}
                                        }
                                    };

                                button.icon.mods[content[i]] = true;
                                button.mods[content[i]] = true;

                                return button;
                            })
                        }
                    ]
                }
            ];
        }
    )
);
