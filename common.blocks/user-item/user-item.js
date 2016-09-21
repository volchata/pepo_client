modules.define('user-item', ['i-bem__dom'],

    function (provide, BEMDOM) {

        provide(BEMDOM.decl(this.name, {
            onSetMod: {
                js: {
                    inited: function () {

                        var user = this.params.user;

                        this.bindTo('pointerclick', function () {
                            document.location.href = window.config.frontend_server + '/users/' + user.displayName;
                        });

                    }
                }
            }
        }));
    });
