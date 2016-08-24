modules.define('bottom-menu', ['i-bem__dom'], function (provide, BEMDOM) {
    provide(BEMDOM.decl({ block: this.name, modaName: 'homescreen', modVal: true }, {
        onSetMod: {
            js: function () {
                var radios = this.findBlocksInside('radio'),
                    urls = ['localhost:3000/im', 'localhost:3000/news', 'localhost:3000/im', 'localhost:3000/account'];

                urls.map(function (v, i) {
                    radios[i].bindTo('pointerclick', function () {
                        document.location.href = v;
                    });
                });
            }
        }
    }, {}));
});
