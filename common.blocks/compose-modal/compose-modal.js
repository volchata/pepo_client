modules.define('compose-modal', ['i-bem__dom', 'jquery', 'BEMHTML'],

    function (provide, BEMDOM, $, BEMHTML) {

        provide(BEMDOM.decl(this.name, {
            onSetMod: {
                js: {
                    inited: function () {
                        console.log('hi');
                        //this.findBlockInside('dropzone').domElem.dropzone({ url: window.config.api_server + "/api/user/feed/image" });
                    }
                }
            }

        }));

    });

