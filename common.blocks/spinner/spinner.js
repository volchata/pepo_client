modules.define('spinner', ['i-bem__dom'],

    function (provide, BEMDOM) {

        provide(BEMDOM.decl(this.name, {
            onSetMod: {
                js: {
                    inited: function () {
                        if (this.hasMod('slide')) {
                            this.domElem[0].scrollIntoView({block: 'end', behavior: 'smooth'});
                        }
                    }
                }
            }

        }));

    });
