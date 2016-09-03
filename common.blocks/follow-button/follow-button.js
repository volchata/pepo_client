modules.define('follow-button', ['i-bem__dom', 'jquery'],

    function (provide, BEMDOM, $) {

        provide(BEMDOM.decl(this.name, {
            onSetMod: {
                js: {
                    inited: function () {
                        var button = this.findBlockInside('button'),
                            method;
                        if (this.params.followed === undefined) {
                            method = "POST";
                            button.domElem.text("Читать");
                        } else {
                            method = "DELETE";
                            button.domElem.text("Отписаться");
                        }
                        this.bindTo('pointerclick', function () {
                            $.ajax(
                                {
                                    url: "/api/users/" + this.params.displayName + "/follower",
                                    type: method,
                                    data: {},
                                    dataType: "json"
                                }
                            ).done(
                                function (msg) {
                                    if (method === "POST") {
                                        button.setMod("follow", "no");
                                        button.domElem.text("Отписаться");
                                    } else {
                                        button.setMod("follow", "yes");
                                        button.domElem.text("Читать");
                                    }
                                }
                            ).fail(
                                function () {
                                    button.setMod("has-error");
                                    button.domElem.text("Ошибка");
                                }
                            );
                        });
                    }
                }
            }
        }));
    });
