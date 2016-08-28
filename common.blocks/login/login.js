modules.define('login', ['i-bem__dom', 'jquery', 'BEMHTML'], function (provide, BEMDOM, $) {

    provide(BEMDOM.decl(this.name,
        {
            onSetMod: {
                'js': {
                    'inited': function () {

                        var enter_btn = this.findBlockInside("login__button"),
                            field_login = this.findBlockInside("login__input");

                        enter_btn.bindTo('pointerclick', function (e) {
                            e.preventDefault();
                            //console.log(field_login.domElem);
                            $.ajax(
                                {
                                    url: "/api/user/",
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

                                    alert(response); // ok on iphone
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
