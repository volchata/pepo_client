modules.define('tweet', ['i-bem__dom'], function (provide, BEMDOM, BEMHTML) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: function () {
                var button_reply = this.findBlockInside('button_reply'),
                    button_repost = this.findBlockInside('button_repost'),
                    button_like = this.findBlockInside('button_like'),
                    arr = [],
                    that = this;

                arr.push({
                    block: 'button',
                    mods: { like: true },
                    content: '1'
                });

                BEMDOM.after(that.domElem,
                    BEMHTML.apply(arr)
                )
                button_like.bindTo('pointerclick', function () {

                });

                button_reply.bindTo('pointerclick', function () {
                    console.log('reply')
                });

                button_repost.bindTo('pointerclick', function () {
                    console.log('repost')
                })
            }
        }
        },
        {}))
});
