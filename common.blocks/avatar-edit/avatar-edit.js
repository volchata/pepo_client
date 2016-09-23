modules.define('avatar-edit', ['i-bem__dom', 'jquery'],

    function (provide, BEMDOM, $) {

        provide(BEMDOM.decl(this.name, {
            onSetMod: {
                js: {
                    inited: function () {
                        var button = this.findBlockInside({ blockName: 'button', modName: 'type', modVal: 'submit'}),
                            that = this,
                            avatar;

                        this.findBlockOutside('page').on(
                            'upload_success', // имя БЭМ-события
                            function (event, data) {
                                avatar = data.image;
                            },
                            that
                        );

                        button.bindTo('pointerclick', function () {

                            that.dropElemCache('error-message');

                            $.ajax(
                                {
                                    url: '/api/user/',
                                    type: 'POST',
                                    data: {
                                        avatar: avatar
                                    },
                                    dataType: 'json'
                                }
                            ).done(
                                function () {
                                    document.location.href = window.config.frontend_server + '/interest/';
                                }
                            ).fail(
                                function (msg) {
                                    BEMDOM.append(that.domElem, BEMHTML.apply({
                                        block: 'error-message',
                                        content: msg.responseText
                                    }));

                                    that.dropElemCache('error-message');
                                }
                            );
                        });
                    }
                }
            }
        }));
    });
