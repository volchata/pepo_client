block('subscriber')(
    content()(
        function () {
            var isf = this.ctx.data.user.followed;
            if (this.ctx.mods == null) this.ctx.mods = {};
            this.ctx.mods.type = (isf ? 'unfollow' : 'follow');
            this.ctx.js = {userName: this.ctx.data.user.displayName};
            return {
                block: 'button',
                mods: {
                    theme: 'islands',
                    size: 'm'
                },
                js: true,
                text: (isf ? 'Отписаться' : 'Подписаться')
            };
        }
    )
);
