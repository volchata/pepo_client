modules.define('bottom-menu', ['i-bem__dom'], function (provide, BEMDOM) {

    provide(BEMDOM.decl({ block: this.name, modName: 'homescreen', modVal: true }, {

        onSetMod: {
            js : function(){
                var radio = this.findBlocksInside('radio'),
                    urls = ['localhost:3000/wall', 'localhost:3000/im', 'localhost:3000/account', 'localhost:3000/notification'];

                urls.map(function(v, i){
                    radio[i].bindTo('pointerclick', function(){
                        location.href = v;
                    })
                })
            }
        }
        },
        {}))
});
