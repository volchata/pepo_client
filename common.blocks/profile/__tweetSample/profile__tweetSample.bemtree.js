block('profile').elem('tweetSample')(
    js()(true),
    content()(
        function () {
            var tabs = ['last', 'pics', 'liked'];
            var tabLabels = ['Недавние', 'Картинки', 'Лайки'];
            var user = this.data.user;

            return [
                {
                    block: 'radio-group',
                    mods: {
                        'theme': 'islands',
                        size: 'm',
                        type: 'button',
                        togglable: 'radio',
                        role: 'tweets-variants-control'
                    },
                    name: 'tweet-type-switcher',
                    val: tabs[0],
                    options: tabs.map(function (v, idx) {
                        return {
                            val: v,
                            text: tabLabels[idx]
                        };
                    })
                },
                {
                    elem: 'tabsContainer',
                    elemMods: { type: tabs[0] },
                    content: tabs.map(function (v) {
                        return {
                            block: 'tweet-feed',
                            mods: { role: 'tweet-feed-' + v },
                            data: user['tweets_' + v]
                        };
                    })
                }
            ];
        }
    )
);
