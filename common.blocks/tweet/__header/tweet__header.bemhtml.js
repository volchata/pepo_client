block('tweet').elem('header')(
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
                    mods: { time: true },
                    content: this.ctx.time
                }
            ];
        }
    )
);
