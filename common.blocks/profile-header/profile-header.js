modules.define('profile-header', ['i-bem__dom'], function (provide, BEMDOM) {
    provide(BEMDOM.decl(this.name,
        {
            onSetMod: {
                'js': {
                    'inited': function () {
                        var editProfile = this.findBlockInside("profile-header__right");

                        if (editProfile)
                        {
                            editProfile.bindTo('click', function () {
                                window.location.href = "/profile-edit/";
                            });
                        }
                    }
                }
            }
        },
        {}));
});
