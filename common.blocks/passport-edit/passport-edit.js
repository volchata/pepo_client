modules.define('passport-edit', ['i-bem__dom', 'jquery'],

    function (provide, BEMDOM, $) {

        provide(BEMDOM.decl(this.name, {
            onSetMod: {
                js: {
                    inited: function () {
                        var button = this.findBlockInside({ blockName: 'button', modName: 'type', modVal: 'submit'}),
                            that = this,
                            firstName = this.findBlockInside('input_field_firstName').findBlockInside('input__control'),
                            lastName = this.findBlockInside('input_field_lastName').findBlockInside('input__control');

                        button.bindTo('pointerclick', function () {

                            $.ajax(
                                {
                                    url: '/api/user/',
                                    type: 'POST',
                                    data: {
                                        firstName: firstName.domElem.val(),
                                        lastName: lastName.domElem.val()
                                    },
                                    dataType: 'json'
                                }
                            ).done(
                                function () {
                                    document.location.href = window.config.frontend_server + '/account/edit/avatar';
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
