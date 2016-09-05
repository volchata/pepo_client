block('profile').elem('stats')(
    content()(function () {
        return this.ctx.stats.map(function (item) {
            return [
                {
                    block: "mini-stat",
                    content: [
                        {
                            elem: "stat",
                            content: item.value
                        },
                        {
                            elem: "title",
                            content: item.title

                        }
                    ]
                },
                ' '
            ];

        });

    })

);
