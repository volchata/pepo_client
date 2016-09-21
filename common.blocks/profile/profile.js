modules.define('profile', ['i-bem__dom'],

    function (provide, BEMDOM) {

        provide(BEMDOM.decl(this.name, {
            onSetMod: {
                js: {
                    inited: function () {
                        var buttons = this.findBlockInside(
                                {
                                    blockName:'radio-group',
                                    modName: 'role',
                                    modVal: 'tweets-variants-control'
                                }),
                            tabs = this.elem('tabsContainer'),
                            self = this;
                        
                        buttons.bindTo('click', function (e) {
                            self.setMod(tabs, 'type', this.getVal());
                        });
                    }
                }
            }
        }));
    });
