modules.define('tweet', ['i-bem__dom'], function (provide, BEMDOM) {

    provide(BEMDOM.decl(this.name,
        {
            onSetMod: {
                js: function () {
                    console.log(this);
                }
            }
        }, {}));
});
