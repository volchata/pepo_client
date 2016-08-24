modules.define('login', ['i-bem__dom', 'jquery', 'BEMHTML'], function (provide, BEMDOM, $, BEMHTML) {

    provide(BEMDOM.decl(this.name,
        {
            onSetMod: {
                'js': {
                    'inited': function () {

                        var enter_btn = this.findBlockInside("login__button"),
                            field_login = this.findBlockInside("login__input"),
                            that = this;

                        enter_btn.bindTo('pointerclick', function (e) {
                            e.preventDefault();

                            var old_error = that.findBlockInside('error-message');

                            if (old_error) {
                                BEMDOM.destruct(old_error.domElem);
                            }

                            that.dropElemCache('error-message');

                            $.ajax(
                                {
                                    url: "http://localhost:8080/api/user/",
                                    type: "POST",
                                    data: {
                                        login: field_login.findBlockInside("input__control").domElem.val()
                                    },
                                    dataType: "json",
                                    contentType: "multipart/form-data",
                                    context: this
                                }
                            ).done(
                                function () {
                                    document.location.href = "/";
                                }
                            ).fail(
                                function (msg) {
                                    var response = msg.responseText;
                                    if (!response) {
                                        response = 'Неизвестная ошибка сервера';
                                    }

                                    field_login.setMod('has-error', true);

                                    BEMDOM.append(that.domElem, BEMHTML.apply({
                                        block: 'error-message',
                                        content: response
                                    }));


                                    that.dropElemCache('error-message');
                                }
                            );
                        });

                        field_login.findBlockInside("input__control").bindTo("focus", function () {
                            field_login.setMod('has-error', false);
                        });
                    }
                }
            }
        }
        ));

});
