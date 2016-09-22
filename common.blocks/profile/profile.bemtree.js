block('profile')(
    js()(true),
    content()(
        function () {
            var user = this.data.user;
            // console.log('this.data', this);
            var avatar_mods = {
                'profile': true
            };

            if (!user.avatar) avatar_mods['no-avatar'] = true;

            return [
                {
                    elem: 'header',
                    content: [
                        {
                            elem: 'info-left',
                            content: [
                                { block: 'avatar', mods: avatar_mods},
                                { block: 'about-user'},
                                { block: 'mini-stat', data: {stat: {
                                    title: 'Читает',
                                    value: user.followers
                                }}},
                                { block: 'mini-stat', data: {stat: {
                                    title: 'Читатели',
                                    value: user.follows
                                }}}
                            ]
                        },
                        {
                            elem: 'info-right',
                            content: [
                                { elem: 'controls'}
                            ]
                        }
                    ]
                },
                {
                    elem: 'tweetSample',
                    js: true
                }
            ];
        }
    )
);
