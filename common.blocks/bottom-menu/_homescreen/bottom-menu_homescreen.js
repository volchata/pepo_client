modules.define('bottom-menu', ['i-bem__dom'], function (provide, BEMDOM) {
    provide(BEMDOM.decl({ block: this.name, modName: 'homescreen', modVal: true }, {
        onSetMod: {
            js: function () {
                var radios = this.findBlocksInside('radio'),
                    urls = [ window.config.frontend_server + '/feed', window.config.frontend_server + '/news', window.config.frontend_server + '/im', window.config.frontend_server + '/account'];

                urls.map(function (v, i) {
                    radios[i].bindTo('pointerclick', function () {
                        document.location.href = v;
                    });
                });
            }
        }
    }, {}));
});
