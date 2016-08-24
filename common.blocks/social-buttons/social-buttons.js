modules.define('social-buttons', ['i-bem__dom', 'jquery'],

    function(provide, BEMDOM, Block) {

        provide(BEMDOM.decl(this.name, {
            onSetMod: {
                js: {
                    inited: function() {
                        var button_vk = this.findBlockInside('button_social_vk');
                        if (button_vk) button_vk.bindTo('pointerclick', function(e) {
                            document.location.href = 'http://localhost:8080/auth/vk';
                        });

                        var button_fb = this.findBlockInside('button_social_facebook');
                        if (button_fb) button_fb.bindTo('pointerclick', function(e) {
                            document.location.href = 'http://localhost:8080/auth/fb';
                        });
                    }
                }
            },

        }));

    });