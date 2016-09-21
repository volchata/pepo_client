block('mini-stat')(
    tag()('span'),
    content()(
        function () {
            var stat = this.ctx.data.stat;
            return [
                {
                    elem: 'count',
                    tag:'span',
                    content: stat.value
                },
                {
                    elem: 'title',
                    tag:'span',
                    content: stat.title
                }
            ];
        }
    )
);
