block('tweet-attachment')(
    attrs()({ role: 'img' }),

    tag()('div'),
    js()(true),
    content()(function () {
        var ctx = this.ctx;
        console.log('We are here');
        return [
            {
                block: 'link',
                url: ctx.target,
                mix: 'header',
                content: ctx.target + ' - ' + ctx.title
            },
            {
                block: 'link',
                url: ctx.target,
                content: {
                    block: 'image',
                    url: ctx.url,
                    width: ctx.width,
                    height: ctx.height,
                    alt: ctx.target,
                    title: ctx.target + ' - ' + ctx.title
                }
            }


        ];
    })
);
