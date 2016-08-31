modules.define('login', ['i-bem__dom', 'jquery', 'BEMHTML'], function (provide, BEMDOM, $, BEMHTML) {

    provide(BEMDOM.decl(this.name,
        {
            onSetMod: {
                'js': {
                    'inited': function () {

                        var enter_btn = this.findBlockInside("login__button"),
                            field_login = this.findBlockInside("login__input"),
                            that = this;

                        function formError(text) {
                            field_login.setMod('has-error', true);

                            BEMDOM.append(that.domElem, BEMHTML.apply({
                                block: 'error-message',
                                content: text
                            }));


                            that.dropElemCache('error-message');
                        }



                        enter_btn.bindTo('pointerclick', function (e) {
                            e.preventDefault();

                            var old_error = that.findBlockInside('error-message');

                            if (old_error) {
                                BEMDOM.destruct(old_error.domElem);
                            }

                            that.dropElemCache('error-message');

                            $.ajax(
                                {
                                    url: window.config.api_server + "/api/user/",
                                    type: "POST",
                                    data: JSON.stringify({
                                        displayName: field_login.findBlockInside("input__control").domElem.val()
                                    }),
                                    contentType: "application/json; charset=utf-8",
                                    dataType: "json",
                                    context: this
                                }
                            ).done(
                                function (msg) {
                                    if (!msg.notRegistered) {
                                        document.location.href = "/feed/";
                                    } else {
                                        // такое можно предположить только если что-то с БД, причем сам сервер ок
                                        formError("Не удалось зарегистрироваться, попробуйте позднее");
                                    }
                                }
                            ).fail(
                                function (msg) {
                                    var response = msg.responseText;
                                    if (!response) {
                                        response = 'Неизвестная ошибка сервера';
                                    }

                                    formError(response);
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
