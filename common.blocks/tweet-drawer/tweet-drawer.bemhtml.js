block('tweet-drawer')(
    js()( function () {
        console.log(this.ctx.data);
        return {
            timestamp: this.ctx.data.timestamp,
            parent: this.ctx.data.parent
        };
    }),
    content()(
        function () {
            return 'Загрузка....';
        }
    )
);
