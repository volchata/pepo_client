modules.define('dropzone', ['i-bem__dom', 'jquery'], function (provide, BEMDOM, jQuery) {

// этот комментарий будет заменен `borschik`-ом на содержимое файла плагина
    /*borschik:include:../../node_modules/dropzone/dist/min/dropzone.min.js*/

    Dropzone.autoDiscover = false;

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function () {
                    // в момент инициализации блока будет включен dropzone
                    console.log('Dropzone');
                    //this.domElem.dropzone({ url: '/api/user/feed/image' });
                }
            }
        }
    },
        {

        }
        ));

});
