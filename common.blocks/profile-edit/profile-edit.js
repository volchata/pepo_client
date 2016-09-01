modules.define('profile-edit', ['i-bem__dom', 'jquery'],

    function (provide, BEMDOM, $) {

        provide(BEMDOM.decl(this.name, {
            onSetMod: {
                js: {
                    inited: function () {
                        var button = this.findBlockInside('button'),
                            that = this,
                            firstName = this.findBlockInside('input_field_firstName').findBlockInside('input__control'),
                            lastName = this.findBlockInside('input_field_lastName').findBlockInside('input__control'),
                            description = this.findBlockInside('textarea_field_description');



                        button.bindTo('pointerclick', function () {

                            var old_error = that.findBlockInside('error-message');

                            if (old_error) {
                                BEMDOM.destruct(old_error.domElem);
                            }

                            that.dropElemCache('error-message');

                            $.ajax(
                                {
                                    url: "/api/user/",
                                    type: "POST",
                                    data: {
                                        firstName: firstName.domElem.val(),
                                        lastName: lastName.domElem.val(),
                                        description: description.domElem.val()
                                    },
                                    dataType: "json"
                                }
                            ).done(
                                function () {
                                    document.location.href = window.config.frontend_server + '/profile/';
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
