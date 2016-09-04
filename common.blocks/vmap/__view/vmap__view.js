console.log('maploaded');
modules.define('vmap__view', ['i-bem__dom', 'jquery'], function (provide, BEMDOM, jQuery) {
    provide(BEMDOM.decl(this.name, {

        onSetMod: {
            js: {
                inited: function () {
                    console.log('map');
                }
            }
        }
    }));

});
