block('subscriber')(
    content()(
        function () {

            var user = (this.data && this.data.user) ? this.data.user : this.ctx.data.user;

            var skel = {
                block: 'button',
                mods: { theme: 'islands', size: 'm', type: 'follow' },
                js: true,
                text: 'Подписаться'
            };

            if (user.followed) {
                skel.text = 'Отписаться';
                skel.mods.type = 'unfollow';

            }
            return skel;
        }
    )
);
