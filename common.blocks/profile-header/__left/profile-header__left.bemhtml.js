block('profile-header').elem('left')(
    content()(
        function () {
            var avatar;
            if (this.ctx.data) {
                avatar = this.ctx.data.avatar || null;
            } else {
                avatar = null;
            }

            return [
                {
                    block: 'profile-picture',
                    content: [
                        {
                            block: 'image',
                            url: avatar
                        }
                    ]
                },
                {
                    elem: 'gear'
                }
            ];
        }
    )
);
