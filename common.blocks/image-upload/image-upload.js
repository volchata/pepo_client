modules.define('image-upload', ['i-bem__dom', 'jquery', 'BEMHTML'],

    function (provide, BEMDOM, $, BEMHTML) {

        provide(BEMDOM.decl(this.name, {
            onSetMod: {
                js: {
                    inited: function () {
                        var t = this.findBlockInside('dropzone');
                        if (t !== null) {
<<<<<<< 662e40a0254a4d90d66bbe23f5203ffba5cec5dc
                            this.domElem.dropzone({ url: window.config.api_server + "/api/user/image" });
=======
                            domElem.dropzone({ url: window.config.api_server + "/api/user/image" });
>>>>>>> фиксы по оформлению
                        }
                    }
                }
            }

        }));

    });
