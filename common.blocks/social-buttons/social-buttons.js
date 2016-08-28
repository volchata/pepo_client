modules.define('social-buttons', ['i-bem__dom', 'jquery'],

    function (provide, BEMDOM) {

        provide(BEMDOM.decl(this.name, {
            onSetMod: {
                js: {
                    inited: function () {
                        var button_vk = this.findBlockInside('button_social_vk'),
                            button_fb = this.findBlockInside('button_social_facebook');

                        if (button_vk) {
                            button_vk.bindTo('pointerclick', function () {
                                document.location.href = 'http://localhost:8080/auth/vk';
                            })
                        };

                        if (button_fb) {
                            button_fb.bindTo('pointerclick', function () {
                                document.location.href = 'http://localhost:8080/auth/fb';
                            })
                        }
                    }
                }
            }
        }))

})