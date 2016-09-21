block('tweet-attachment')(

    attrs()({role: 'img'}),

    tag()('div'),
    js()(true),
    content()(function () {
        var data = this.ctx;
        var t = data.title;
        t = (t !== null) ? (' - ' + t) : '';
        return [
            {
                block: 'link',
                url: data.target,
                mix: 'header',
                content: data.target + t
            },
            {
                block: 'link',
                url: data.target,
                content:
                {
                    block: 'image',
                    url: data.url,
                    // width: data.width,
                    // height: data.height,
                    alt: data.target,
                    title: data.target + t
                }
            }
        ];
    })
);
