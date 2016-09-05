modules.define('profile', ['i-bem__dom', 'BEMHTML', 'jquery'], function (provide, BEMDOM, BEMHTML, $) {
    provide(BEMDOM.decl({ block: this.name }, {
        beforeSetMod: {
            js: {
                inited: function () {
                    $.ajax({
                        url: window.config.api_server + '/api/user',
                        type: 'GET',
                        dataType: 'json',
                        context: this
                    }).done(this.setAvatar);
                }
            }
        },

        setAvatar: function (msg) {
            var img = this.findBlockInside('image');

            img.domElem[0].src = msg.avatar;
        }
    }, {}));
});
