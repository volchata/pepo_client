block('avatar').mod('tweet-item', true)(
    wrap()(function () {
        return {
            block: 'link',
            url: '/users/' + this.ctx.data.user.displayName,
            content: this.ctx
        };
    })
);
