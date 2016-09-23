block('tweet-item').elem('tweet-image')(
    wrap()(function () {
        return {
            elem: 'figure',
            content: this.ctx
        };
    })
);
