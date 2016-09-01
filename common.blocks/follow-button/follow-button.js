modules.define('follow-button', ['i-bem__dom', 'jquery'],

    function (provide, BEMDOM, $) {

        provide(BEMDOM.decl(this.name, {
            onSetMod: {
                js: {
                    inited: function () {
                        var button = this.findBlockInside('button');

                        this.bindTo('pointerclick', function () {
                            $.ajax(
                                {
                                    url: "/api/user/" + this.params.displayName + "/friends",
                                    type: "POST",
                                    data: {},
                                    dataType: "json"
                                }
                            ).done(
                                function (msg) {
                                    if (msg.friend) {
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
