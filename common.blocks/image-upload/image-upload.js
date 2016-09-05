modules.define('image-upload', ['i-bem__dom', 'jquery', 'BEMHTML'],

    function (provide, BEMDOM, $, BEMHTML) {

        provide(BEMDOM.decl(this.name,
            {
                onSetMod: {
                    js: {
                        inited: function () {
                            var t = this.findBlockInside('dropzone');
                            if (t !== null) {
                                this.domElem.dropzone({url: window.config.api_server + '/api/user/image'});
                            }
                        }
                    }
                }

            }));

    });
