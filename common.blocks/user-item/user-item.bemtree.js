block('user-item')(
    content()(
        function () {
            var user = this.ctx.data.user,
                avatar_mods = { 'user-item': true };

            if (!user.avatar) {
                avatar_mods['no-avatar'] = true;
            }

            return [
                {
                    elem: 'left',
                    content: {
                        block: 'avatar',
                        mods: avatar_mods,
                        data: { user: user }
                    }
                },
                {
                    elem: 'right',
                    content: {
                        block: 'subscriber',
                        data: {
                            user: user
                        }
                    }
                },
                {
                    elem: 'middle',
                    content: [

                        {
                            block: 'about-user',
                            data: { user: user }
                        }
                    ]
                }
            ];
        })
);
