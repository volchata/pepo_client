block('tweet-attachment')(

    attrs()({role: 'img'}),

    tag()('div'),
    js()(true),
    content()(function () {
        var ctx = this.ctx;
        if (ctx.title) {
            ctx.title = ' - ' + ctx.title;
        } else {
            ctx.title = '';
        }
        if (ctx.target && ctx.url ) {
            return [
                {
                    block: 'link',
                    url: ctx.target,
                    mix: 'header',
                    content: ctx.target + ctx.title
                },
                {
                    block: 'link',
                    url: ctx.target,
                    content:
                    {
                        block: 'image',
                        url: ctx.url,
                        width: ctx.width,
                        height: ctx.height,
                        alt: ctx.target,
                        title: ctx.target + ctx.title
                    }
                }
            ];
        } else {
            return [
                {block: 'spinner'}
            ]
        }

    })
);
