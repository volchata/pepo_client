modules.define('users-search', ['i-bem__dom', 'jquery', 'BEMHTML'],

    function (provide, BEMDOM, $, BEMHTML) {

        provide(BEMDOM.decl(this.name, {
            onSetMod: {
                js: {
                    inited: function () {
                        var search_input = this.findBlockInside('input'),
                            timer = false,
                            that = this;

                        search_input.bindTo('keyup', function () {
                            if (timer) {
                                clearTimeout(timer);
                            }

                            timer = setTimeout(function () {
                                that._search(search_input.getVal());
                            }, 500);
                        });
                        //console.log();
                    }
                }
            },
            _search: function (query) {
                console.log(query);

                $.ajax(
                    {
                        url: window.config.frontend_server + '/bemtree/users/search/' + query + '/',
                        type: 'GET',
                        dataType: 'json',
                        context: this
                    }
                ).done(
                    function (msg) {
                        var cont = this.findBlockInside('user-feed');

                        if (msg.length) {

                            $.each(msg, function (i, v) {
                                BEMDOM.update(cont.domElem, BEMHTML.apply(v));
                            });

                        } else {
                            BEMDOM.update(cont.domElem, 'Не найдено ни одного пользователя');
                        }
                    }
                ).fail(
                    function () {
                        BEMDOM.update(this.domElem, 'Сервис недоступен');
                    }
                );

            }
        }));
    });
