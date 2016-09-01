modules.define('profile-header', ['i-bem__dom'],

    function (provide, BEMDOM, $) {

        provide(BEMDOM.decl(this.name, {
            onSetMod: {
                js: {
                    inited: function () {
                        var button = this.findBlockInside('right', 'button'),
                            that = this;
                        button.bindTo('pointerclick', function () {
                            document.location.href = window.config.frontend_server + '/profile-edit/';
                        });
                    }
                }
            }
        }));
    });
