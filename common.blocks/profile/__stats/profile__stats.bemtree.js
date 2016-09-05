block('profile').elem('stats')(
    content()(
        function () {

            var ctx = this.ctx,
                stats = ['Подписчиков', 'Читаю'].map(function (v) {
                var mod,
                    count;

                if (v == 'Подписчиков') {
                    mod = { subs: true };
                    count = ctx.followers
                } else {
                    mod = { follow: true };
                    count = ctx.follows
                }

                return {
                    block: 'counters',
                    mods: mod,
                    content: [
                        {
                            block: 'text',
                            mods: { 'count': true },
                            content: count
                        },
                        {
                            block: 'text',
                            content: v
                        }
                    ]
                }
            });

            return stats;
        }
    )
);
