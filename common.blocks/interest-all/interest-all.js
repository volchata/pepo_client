modules.define('interest-all', ['i-bem__dom'],
    function (provide, BEMDOM) {

        provide(BEMDOM.decl(this.name,
            {
                onSetMod: {
                    js: {
                        inited: function () {
                        }
                    }
                }
            },
            {
                live: function() {
                    this.liveInitOnEvent('click');
                }
            }
            ));
    });

