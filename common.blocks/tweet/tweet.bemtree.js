block('tweet')(
    content()(
        function () {
            var data = this.data.tweet_data;

            console.log('data.users: ', JSON.stringify(data,null,'  '))

            return [
                {
                    elem: 'left',
                    content: {
                        block: 'image',
                        mix: { block: 'avatar', mods: { type: 'tweet' } },
                        url: data.users['57c19d3dbb873d7c3b8cfaa1'].avatar
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
