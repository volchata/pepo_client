block('profile').elem('image')(
    js()(true),
    content()(
        function () {
            return {
                block: 'image',
                url: this.ctx.url
            };
        }
    )
);
