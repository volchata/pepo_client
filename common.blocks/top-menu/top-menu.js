modules.define('top-menu', ['i-bem__dom'], function (provide, BEMDOM) {
    provide(BEMDOM.decl(this.name,
        {
            onSetMod: {
                'js': {
                    'inited': function () {
                        var input = this.findBlockInside('input'),
                            search = this.findBlockInside("top-menu__search-button"),
                            back = this.findBlockInside("top-menu__back-button");

                        search.bindTo('click', function () {
                            input.toggleMod('disabled');
                        });

                        /*jslint browser: true*/
                        if (!sessionStorage.url) {
                            sessionStorage.url = window.location.href;
                        }

                        if (sessionStorage.url === window.location.href) {
                            back.setMod('disabled');
                        }

                        back.bindTo('click', function () {
                            window.history.back();
                        });
                    }
                }
            }
        },
        {}));
});
