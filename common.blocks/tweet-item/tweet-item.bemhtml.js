block('tweet-item')(
    js()(
        function () {
            var tweet = this.ctx.data.tweet;
            return { tweet: tweet };
        })
);
