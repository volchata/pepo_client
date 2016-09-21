block('user-item')(
    content()(
        function () {
            var user = this.ctx.data.user;

            return [
                {
                    elem: 'left',
                    content: {
                        block: 'avatar',
                        mods: { 'user-item': true },
                        data: { user: user }
                    }
                },
                {
                    elem: 'right',
                    content: 'блок кнопки фоллоу'
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
