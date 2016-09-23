block('tweet-item').elem('tweet-body')(
    content()(
        function () {

            var tweet = this.ctx.data.tweet,
                image = null,
                geo = null,
                content = [],
                tweet_content;

            // тут проверяется, есть ли какие-то медиа-вложения в твит. если есть, будет сформирован "гамбургер". если нет, просто контент.
            //console.log(tweet);
            if (tweet.extras.attachment) {

                image = tweet.extras.attachment.image;
                content[content.length] = {
                    block: 'link',
                    url: tweet.extras.url,
                    content: tweet.extras.attachment.title
                };
            }

            if (tweet.extras.image) {
                image = tweet.extras.image; // если к твиту приложена еще и картинка, она перезапишет снапшот в гамбургере
            }
            if (tweet.extras.geo) {
                geo = tweet.extras.geo;
            }

            if (tweet.content) {
                if (content.length) {
                    content[content.length] = ' ' + tweet.content; // если что-то добавили ранее в контент, добавить пробельчик
                } else {
                    content[content.length] = tweet.content;
                }
            }

            if (image) { // если картинка получена так или иначе, то бургер
                tweet_content = [];
                tweet_content[0] = {
                    elem: 'tweet-image',
                    content: {
                        block: 'image',
                        url: image
                    }
                };

                if (content.length) {
                    tweet_content[1] = {
                        elem: 'tweet-text',
                        content: content
                    };
                } else {
                    tweet_content[0].elemMods = { 'alone': true }; // картинка одна, скруглить гамбургер
                }

                /*if (geo) {

                 }*/

            } else {
                tweet_content = [content]; // если нет, то текстовые данные
            }

            if (geo) {
                console.log(['GEO', geo.geometry.coordinates]);
                var coords = geo.geometry.coordinates;
                tweet_content.push({
                    elem: 'tweet-geo',
                    content: {
                        block: 'vmap',
                        js: { center: [coords[1], coords[0]], mod: 'view' }
                    }
                });

            }

            return tweet_content;

        })
);
