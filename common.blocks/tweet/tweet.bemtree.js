block('tweet')(
    content()(
        function () {
            var data = this.ctx, //{ block: 'tweet' и поля переданные из tweets_display_default.bemtree.js }
                tweet_content = [
                    {
                        elem: 'left',
                        content: {
                            block: 'image',
                            mods: { type: 'avatar' },
                            url: data.avatar
                        }
                    },
                    {
                        elem: 'right',
                        data: data
                    }
                ];

            return tweet_content;
        }
    ));
