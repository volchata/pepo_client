modules.define('page', ['i-bem__dom'], function (provide, BEMDOM) {

    provide(BEMDOM.decl(this.name,
        {
            onSetMod: {
                'js': {
                    'inited': function () {
                        /* global window */
                        console.log('config up');
                        window.config = {
                            api_server: 'http://localhost:8080',
                            frontend_server: 'http://localhost:8080'
                        };
                    }
                }
            }
        }
        ));

});
