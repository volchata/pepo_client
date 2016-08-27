modules.define('top-menu', ['i-bem__dom'], function(provide, BEMDOM){

    provide(BEMDOM.decl(this.name,
        {
            onSetMod : {
                'js' : {
                    'inited': function() {
                        var menu = this;
                        var search = this.findBlockInside("top-menu__search-button");
                        search.bindTo('click', function(e) {
                            menu.toggleMod('oNsearch');
                        });
                    }
                }
            }
        },
        {}
    ));
});