modules.define('bottom-menu', ['i-bem__dom', 'jquery'], function (provide, BEMDOM, $) {
    provide(BEMDOM.decl({ block: this.name, modName: 'homescreen', modVal: true }, {
        onSetMod: {
            js: function () {
                $.ajax({
                    url: window.config.api_server + '/api/user/',
                    type: 'GET',
                    dataType: 'json',
                    contentType: "application/json; charset=utf-8",
                    context: this
                }).done(this.getUrls);
            }
        },

        getUrls: function (msg) {
            var radios = this.findBlocksInside('radio'),
                urls = [ window.config.frontend_server + '/feed', window.config.frontend_server + '/news', window.config.frontend_server + '/im'];

            urls.push(window.config.frontend_server + '/users/' + msg.displayName);

            urls.map(function (v, i) {
                radios[i].bindTo('pointerclick', function () {
                    document.location.href = v;
                });
            });
        }
    }, {}));
});
