modules.define('subscriber', ['i-bem__dom', 'jquery'],

    function (provide, BEMDOM, $) {

        provide(BEMDOM.decl(this.name, {
            onSetMod: {
                'js': {
                    'inited': function () {

                        var self = this;

                        this.method = (this.getMod('type') === 'unfollow') ? 'DELETE' : 'POST';
                        this.emitter = this.findBlockOutside('page');
                        this.btn = this.findBlockInside('button');
                        this.btn.bindTo('pointerclick', function (e) {
                            self.serve();
                            e.stopPropagation();
                        });
                    }
                },
                'type': {
                    'follow': function () {
                        this.method = 'POST';
                        this.btn.setText('Подписаться');
                    },
                    'unfollow': function () {
                        this.method = 'DELETE';
                        this.btn.setText('Отписаться');
                    }
                }
            },

            onFollowStateChange: function (user) {
                if (!user) return;
                this.setMod('type', user.followed ? 'unfollow' : 'follow');

                this.emitter.emit('follow_changed_' + this.params.userName,
                    { stat:
                    {
                        value: user.follows
                    }
                    });
            },

            serve: function () {
                var self = this,
                    url = '/api/users/' + this.params.userName + '/follower';
                $.ajax(
                    {
                        url: window.config.api_server + url,
                        type: self.method
                    }
                ).done(
                    function (msg) {
                        self.onFollowStateChange(msg);
                    }
                );
            }

        }));

    });
