block('tweet').elem('right')(
    content()(
        function () {
            var data = this.ctx.data,
                extras = data.extras;

            var content_right = [
                {
                    block: 'about-user',
                    username: data.username,
                    login: data.login,
                    time: data.time
                },
                {
                    block: 'link',
                    mods: { plaintext: true },
                    content: data.tweet_text,
                    url: data.url
                }
            ];

            if (extras) {

                if ((extras.url) && (!extras.attachment)) {
                    content_right.push({
                        block: 'tweet-url',
                        content: [
                            {
                                block: 'link',
                                url: extras.url,
                                content: extras.url
                            }
                        ]
                    });
                }

                if (extras.image) {
                    content_right.push({
                        block: 'tweet-image',
                        content: [
                            {
                                block: 'image',
                                url: extras.image
                            }
                        ]
                    });
                }

                if (extras.attachment) {
                    content_right.push({
                        block: 'tweet-attachment',
                        target: extras.attachment.target,
                        url: extras.attachment.url,
                        title: extras.attachment.title
                    });
                }

                if (extras.geo) {
                    content_right.push({
                        block: 'tweet-geo',
                        content: extras.geo
                    });
                }
            }

            content_right.push({
                elem: 'controls',
                extras: data.extras
            });

            return content_right;
        }
    )
);
