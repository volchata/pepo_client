block('tweet-drawer')(
    js()( function () {
        return {timestamp: this.ctx.data.timestamp};
    }),
    content()(
        function () {
            return 'Загрузка....';
        }
    )
);
