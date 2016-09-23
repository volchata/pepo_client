

block('subscriber')(
    js()(
        function(){ 
            return {userName: this.ctx.data.user.displayName}
        }
    ),
    content()(
        function () {
            var isf = this.ctx.data.user.followed;
            this.mods.type = (isf ? 'unfollow' : 'follow');
            return {
                block: 'button',
                mods: { 
                    theme:'islands', 
                    size:'m'
                },
                js: true,
                text: (isf ? 'Отписаться' : 'Подписаться')
            };
        }
    )
)
