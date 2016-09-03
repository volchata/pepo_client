modules.define('top-menu', ['i-bem__dom', 'jquery', 'BEMHTML'], function (provide, BEMDOM, $, BEMHTML) {

    provide(BEMDOM.decl({ block: this.name, modName: 'users-search', modVal: true },
        {
            onSetMod : {
                'js' : {
                    'inited': function () {

                        var query = this.findBlockInside("input__control"),
                            page = this.findBlockOutside("page_view_users-search"),
                            search_results = page.findBlockInside("search-results"),
                            search = this.findBlockInside("top-menu__search-button"),
                            input = this.findBlockInside('input'),
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
                                            var user_passport = '';

                                            if (!item.lastName) {
                                                if (item.firstName) {
                                                    user_passport = item.firstName;
                                                }
                                            } else {
                                                if (item.firstName) {
                                                    user_passport = item.lastName + ' ' + item.firstName;
                                                } else {
                                                    user_passport = item.lastName;
                                                }
                                            }

                                            BEMDOM.append(search_results.domElem, BEMHTML.apply({
                                                elem: "search-row",
                                                content: {
                                                    block: 'link',
                                                    url: "/users/" + item.displayName,
                                                    content: [
                                                        {
                                                            block: 'profile-picture',
                                                            mods: { search: "users" },
                                                            content: [{
                                                                block: 'image',
                                                                url: item.avatar
                                                            }]
                                                        },
                                                        {
                                                            block: 'account-info',
                                                            content: [
                                                                {
                                                                    block: 'text',
                                                                    mods: { username: true },
                                                                    content: user_passport
                                                                },
                                                                {
                                                                    block: 'text',
                                                                    mods: { id: true },
                                                                    content: '@' + item.displayName
                                                                }
                                                            ]
                                                        }]
                                                }
                                            }));
                                        });
                                    }
                                ).fail(
                                    function (msg) {
                                        BEMDOM.update(search_results.domElem, '');

                                        function isJsonString(str) {
                                            try {
                                                JSON.parse(str);
                                            } catch (e) {
                                                return false;
                                            }
                                            return true;
                                        }

                                        var response = msg.responseText;
                                        if (!response) {
                                            response = 'Неизвестная ошибка сервера';
                                        }

                                        if (isJsonString(response)) {
                                            response = JSON.parse(response).status;
                                        }

                                        if (response === 'Not found') {
                                            response = 'Ни одного пользователя не найдено';
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
                            input.toggleMod('disabled');
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
