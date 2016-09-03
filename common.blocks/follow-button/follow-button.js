modules.define('follow-button', ['i-bem__dom', 'jquery'],

    function (provide, BEMDOM, $) {

        provide(BEMDOM.decl(this.name, {
            onSetMod: {
                js: {
                    inited: function () {
                        var button = this.findBlockInside('button'),
                            method;
                        if (this.params.followed === undefined) {
                            method = 'POST';
                            button.setText('Читать');
                        } else {
                            method = 'DELETE';
                            button.setText('Отписаться');
                        }
                        this.bindTo('pointerclick', function () {
                            $.ajax(
                                {
                                    url: '/api/users/' + this.params.displayName + '/follower',
                                    type: method,
                                    data: {},
                                    dataType: 'json'
                                }
                            ).done(
                                function (msg) {
                                    if (method === 'POST') {
                                        button.setMod('follow', 'no');
                                        button.setText('Отписаться');
                                    } else {
                                        button.setMod('follow', 'yes');
                                        button.setText('Читать');
                                    }
                                }
                            ).fail(
                                function () {
                                    button.setMod('has-error');
                                    button.domElem.text('Ошибка');
                                }
                            );
                        });

                    }
                }
            }
        }));
    });
