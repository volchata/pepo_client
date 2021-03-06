//eslint отключен по той причине, что без передачи аргументом jquery tagEditor не работает
modules.define('interest-block', ['i-bem__dom', 'jquery', 'BEMHTML'],
    function (provide, BEMDOM, jQuery, BEMHTML) { //eslint-disable-line no-unused-vars

// этот комментарий будет заменен `borschik`-ом на содержимое файла плагина
    /*borschik:include:../../libs/jquery-tag-editor/jquery.tag-editor.js*/
    /*borschik:include:../../libs/caret/jquery.caret.js*/
        provide(BEMDOM.decl(this.name,
            {
                onSetMod: {
                    js: {
                        inited: function () {
                        // // в момент инициализации блока будет включен tagEditor
                            var that = this,
                                tArea = jQuery('.interest-block textarea'),
                                userInterests = this.params.userInterests,
                                interestBtns = this.findBlocksInside({ blockName: 'button', modName: 'togglable', modVal: 'check'}),
                                submitBtn = this.findBlockInside({ blockName: 'button', modName: 'type', modVal: 'submit'});

                            tArea.tagEditor({
                                initialTags: userInterests,
                                beforeTagSave: function (field, editor, tags, tag, val) {
                                    interestBtns.forEach(function (btn) {
                                        var btnVal = btn.domElem.context.textContent;

                                        if (btnVal === val && !btn.hasMod('checked')) {
                                            setTimeout(function () {
                                                btn.setMod('checked');
                                            }, 50);
                                        }

                                    });
                                },
                                beforeTagDelete: function (field, editor, tags, val) {
                                    interestBtns.forEach(function (btn) {
                                        var btnVal = btn.domElem.context.textContent;

                                        if (btnVal === val && btn.hasMod('checked')) {
                                            setTimeout(function () {
                                                btn.delMod('checked');
                                            }, 50);
                                        }

                                    });
                                },
                                placeholder: 'Введите свои интересы ...'
                            });

                            interestBtns.forEach(function (btn) {
                                var val = btn.domElem.context.textContent;

                                btn.bindTo('pointerclick', function () {
                                    var tags = tArea.tagEditor('getTags')[0].tags;

                                    if (tags.indexOf(val) === -1) {
                                        tArea.tagEditor('addTag', val);
                                    } else if (tags.indexOf(val) !== -1) {
                                        tArea.tagEditor('removeTag', val);
                                    }
                                });

                                if (jQuery.inArray(val, userInterests) !== -1) {
                                    btn.setMod('checked');
                                }
                            });

                            submitBtn.bindTo('pointerclick', function (e) {
                                e.preventDefault();

                                var tags = tArea.tagEditor('getTags')[0].tags;

                                jQuery.ajax(
                                    {
                                        url: window.config.api_server + '/api/interest',
                                        type: 'POST',
                                        data: JSON.stringify({
                                            interests: tags
                                        }),
                                        contentType: 'application/json; charset=utf-8',
                                        dataType: 'json',
                                        context: this
                                    }
                                ).done(
                                    function () {
                                        console.log('document.referrer', document.referrer);
                                        var url = window.config.frontend_server + '/account/edit/avatar/';

                                        if (document.referrer === url) {
                                            document.location.href = /profile/;
                                        } else {
                                            document.location.href = '/users-search/';
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

                            function formError(text) {

                                BEMDOM.append(that.domElem, BEMHTML.apply({
                                    block: 'error-message',
                                    content: text
                                }));

                                that.dropElemCache('error-message');
                            }
                        }
                    }
                }
            }));
    });
