block('profile').elem('about')(
    content()(
        function () {
            return [
                {
                    block: 'text',
                    mods: { username: true },
                    content: this.ctx.username
                },
                {
                    block: 'text',
                    mods: { id: true },
                    content: this.ctx.login
                },
                {
                    block: 'text',
                    mods: { about: true },
                    content: this.ctx.description
                }
            ];
        }
    )
);
