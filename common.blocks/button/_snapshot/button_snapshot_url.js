modules.define('button', ['i-bem__dom', 'jquery', 'BEMHTML'],

    function (provide, BEMDOM, $, BEMHTML) {

        provide(BEMDOM.decl({ block: this.name, modName: 'snapshot', modVal: 'url' }, {
            onSetMod: {
                js: {
                    inited: function () {
                        var that = this.findBlockOutside('compose-modal'),
                            button = this,
                            url_input = that.findBlockInside('input');

                        button.bindTo('pointerclick', function () {
                            var url = url_input.findBlockInside('input__control').domElem.val();
                            $.ajax(
                                {
                                    url: window.config.api_server + "/api/user/snapshot/",
                                    type: "POST",
                                    data: { url: url },
                                    dataType: "json"
                                }
                            ).done(
                                function (msg) {
                                    console.log(msg);
                                    var snapshot_src = window.config.api_server + "/api/user/snapshot" + msg.attachment;

                                    $.ajax(
                                        {
                                            url: snapshot_src,
                                            type: "GET",
                                            dataType: "json"
                                        }
                                    ).done(
                                        function (msg) {
                                            console.log(msg);
                                            that.findBlockOutside('page').emit('url_snapshot_success', msg);

                                        }
                                    );
                                }
                            );
                        });
                    }
                }
            }

        }));

    });
