block('tweet-item')(
    content()(
        function () {

            var tweet = this.ctx.data.tweet;
            var user = this.ctx.data.user;

            return [
                {
                    elem: 'left',
                    content: {
                        block: 'avatar',
                        mods: { 'tweet-item': true },
                        data: { user: user }
                    }
                },
                {
                    elem: 'right',
                    content: [
                        {
                            elem: 'time',
                            data: { tweet: tweet }
                        },
                        {
                            block: 'about-user',
                            data: { user: user }
                        },
                        {
                            elem: 'tweet-body',
                            data: { tweet: tweet }
                        },
                        {
                            elem: 'controls',
                            data: { tweet: tweet }
                        }
                    ]
                }
            ];
        })
);
