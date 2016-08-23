block('root').replace()(function () {
    var ctx = this.ctx,
        data = ctx.data,
        meta = data.meta || {},
        og = meta.og || {};

    this.data = data;

    if (ctx.context) {
        return ctx.context;
    }

    return {
        block: 'page',
        mods: { view: data.view },
        title: data.title,
        favicon: '/favicon.ico',
        styles: [
            {
                elem: 'css',
                url: '/' + data.view + '.min.css'
            }
        ],
        scripts: [
            {
                elem: 'js',
                url: '/' + data.view + '.min.js'
            }
        ],
        head: [
            { elem: 'meta', attrs: { name: 'description', content: meta.description } },
            { elem: 'meta', attrs: { property: 'og:title', content: og.title || data.title } },
            { elem: 'meta', attrs: { property: 'og:url', content: og.url } },
            { elem: 'meta', attrs: { property: 'og:site_name', content: og.siteName } },
            { elem: 'meta', attrs: { property: 'og:locale', content: og.locale || 'en_US' } },
            { elem: 'meta', attrs: { property: 'og:type', content: 'website' } },
            { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } }
        ]
    };
});
