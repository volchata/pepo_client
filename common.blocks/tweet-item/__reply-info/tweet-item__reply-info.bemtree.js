block('tweet-item').elem('reply-info')(
    content()(
        function () {
            var tweet = this.ctx.data.tweet;

            return [
                'В ответ на ',
                {
                    block: 'link',
                    content: 'сообщение',
                    url: '/tweet/' + tweet._id
                }
            ];
        })
);
