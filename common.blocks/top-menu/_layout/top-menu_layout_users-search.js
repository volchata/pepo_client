modules.define('top-menu', ['i-bem__dom', 'jquery', 'BEMHTML'], function (provide, BEMDOM, $, BEMHTML) {

    provide(BEMDOM.decl({ block: this.name, modName: 'users-search', modVal: true },
        {
            onSetMod : {
                'js' : {
                    'inited': function () {

                        var query = this.findBlockInside("input__control"),
                            page = this.findBlockOutside("page_view_users-search"),
                            search_results = page.findBlockInside("search-results"),
                            menu = this,
                            search = this.findBlockInside("top-menu__search-button"),
                            search_timer;

                        function doSearch() {
                            var search_string = query.domElem.val(),
                                old_error = search_results.findBlockInside('error-message');

                            if (old_error) {
                                BEMDOM.destruct(old_error.domElem);
                            }

                            search_results.dropElemCache('error-message');

                            if (search_string) {
                                $.ajax(
                                    {
                                        url: window.config.api_server + "/api/users/" + search_string + "/search",
                                        type: "GET",
                                        dataType: "json",
                                        contentType: "application/json; charset=utf-8",
                                        context: search_results
                                    }
                                ).done(
                                    function (msg) {
                                        BEMDOM.update(search_results.domElem, '');

                                        $.each(msg, function (i, item) {
                                            BEMDOM.append(search_results.domElem, BEMHTML.apply({
                                                block: 'acc',
                                                content: item.displayName
                                            }));
                                        });
                                    }
                                ).fail(
                                    function (msg) {
                                        var response = msg.responseText;
                                        if (!response) {
                                            response = 'Неизвестная ошибка сервера';
                                        }

                                        BEMDOM.append(search_results.domElem, BEMHTML.apply({
                                            block: 'error-message',
                                            content: response
                                        }));

                                        search_results.dropElemCache('error-message');
                                    }
                                );

                            }
                        }

                        search.bindTo('click', function () {
                            menu.toggleMod('onsearch');
                        });

                        query.bindTo('keyup', function () {
                            if (search_timer) {
                                clearTimeout(search_timer);
                            }

                            search_timer = setTimeout(doSearch, 500);
                        });
                    }
                }
            }
        },
        {}
        )
        );
});
