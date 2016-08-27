block('tweet')(
    content()(
        function () {
            var data = {
                content: 'someText',
                avatar: 'http://image.flaticon.com/icons/svg/188/188993.svg',
                login: 'account_name',
                firstName: 'first name',
                lastName: 'last name',
                timeswap: 'current_time',
                tweet_id: '123'
            };

            return [
                {
                    elem: 'left',
                    content: {
                        block: 'image',
                        mix: { block: 'avatar', mods: { type: 'tweet' } },
                        url: data.avatar
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
                                    mods: { username: true },
                                    content: data.lastName + ' ' + data.firstName
                                },
                                {
                                    block: 'text',
                                    mods: { id: true },
                                    content: '@' + data.login
                                }
                            ]
                        },
                        {
                            block: 'text',
                            mods: { time: true },
                            content: data.timeswap
                        },
                        {
                            block: 'text',
                            mods: { main: true },
                            content: data.content
                        },
                        {
                            block: 'control-group',
                            content: ['reply', 'repost', 'like'].map(function (v, i, content) {

                                var twt = {
                                    block: 'button',
                                    mix: { block: 'tweet', elem: v },
                                    text: '',
                                    icon: {
                                        block: 'icon',
                                        mods: {}
                                    }
                                };

                                twt.icon.mods[v] = true;

                                return twt;
                            })
                        }
                    ]
                }
            ];
        }
    )
);
