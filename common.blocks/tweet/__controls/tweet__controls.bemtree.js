block('tweet').elem('controls').replace()(function () {
    var extras = this.ctx.extras;

    return {
        block: 'control-group',
        content: ['reply', 'repost', 'like'].map(function (value) {
            var text = '',
                mods = {},
                add_btns = {
                    block: 'button',
                    mods: mods,
                    mix: { block: 'tweet', elem: 'action' },
                    text: text,
                    icon: {
                        block: 'icon',
                        mods: {}
                    },
                    js: {
                        action: value
                    }
                };

            if (extras.likes.length && value === 'like') {
                add_btns.text = extras.likes.length;
                add_btns.mods = { type: 'good' };
            }

            if (extras.retweets.length && value === 'repost') {
                add_btns.text = extras.retweets.length;
                add_btns.mods = { type: 'good' };
            }

            add_btns.icon.mods = mods;
            add_btns.icon.mods[value] = true;

            return add_btns;

        })
    };
});
