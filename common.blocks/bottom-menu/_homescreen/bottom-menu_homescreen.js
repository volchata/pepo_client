modules.define('bottom-menu', ['i-bem__dom'], function (provide, BEMDOM) {
    provide(BEMDOM.decl({ block: this.name, modName: 'homescreen', modVal: true }, {
        onSetMod: {
            js: function () {
                var radios = this.findBlocksInside('radio'),
                    urls = ['http://localhost:3000/feed', 'http://localhost:3000/news', 'http://localhost:3000/im', 'http://localhost:3000/account'];

                urls.map(function (v, i) {
                    radios[i].bindTo('pointerclick', function () {
                        document.location.href = v;
                    });
                });
            }
        }
    }, {}));
});
