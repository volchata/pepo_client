modules.define('bottom-menu', ['i-bem__dom', 'jquery'], function (provide, BEMDOM) {
    provide(BEMDOM.decl({block: this.name, modName: 'homescreen', modVal: true}, {
        onSetMod: {
            js: function () {
                var radios = this.findBlocksInside('radio'),
                    urls = [window.config.frontend_server + '/compose', window.config.frontend_server + '/feed',
                        window.config.frontend_server + '/users-search', window.config.frontend_server + '/profile'];

                urls.map(function (v, i) {
                    radios[i].bindTo('pointerclick', function () {
                        document.location.href = v;
                    });
                });
            }
        }
    }, {}));
});
