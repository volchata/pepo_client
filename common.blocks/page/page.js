modules.define('page', ['i-bem__dom'], function (provide, BEMDOM) {

    provide(BEMDOM.decl(this.name,
        {
            onSetMod: {
                'js': {
                    'inited': function () {
                        /* global window */
                        console.log('config up');
                        window.config = { apiserver: 'http://localhost:8080' };
                    }
                }
            }
        }
        ));

});
