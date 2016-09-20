block('spinner')(
    js()(true),
    content()(function () {
        var width = this.ctx.size ;
        var text = this.ctx.text ;
        var c = {
            elem: 'loading',
            content:
            {
                elem: 'title'
            }
        };
        c.attrs = {style: ''};
        if (width !== null)
            c.attrs.style += 'width:' + width + 'px;';
        if (text !== null) {
            c.content.content = text;
            c.attrs.style += 'font-size:' + width + '%;';
        }
        return c;

    }),
    wrap()(function () {
        return {
            tag: 'div',
            elem: 'container',
            content: this.ctx
        };
    })
);
