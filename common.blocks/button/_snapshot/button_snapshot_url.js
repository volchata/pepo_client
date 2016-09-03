modules.define('button', ['i-bem__dom', 'jquery', 'BEMHTML'],

    function (provide, BEMDOM, $, BEMHTML) {

        provide(BEMDOM.decl({ block: this.name, modName: 'snapshot', modVal: 'url' }, {
            onSetMod: {
                js: {
                    inited: function () {

                        function prefixOuterURL(url){
                            var re = /^https?:\/\//;
                            if (!(re.test(url))) {
                                url = 'http://' + url;
                            }
                            return url;
                        }

                        var that = this.findBlockOutside('compose-modal'),
                            button = this,
                            url_input = that.findBlockInside('input');

                        // url_input.findBlockInside('input__control').bindTo('pointerclick',
                        // function () {
                        //     this.domElem.val( prefixOuterURL(this.domElem.val()) );
                        // })

                        button.bindTo('pointerclick', function () {
                            var url = prefixOuterURL(url_input.findBlockInside('input__control').domElem.val());
                            url_input.findBlockInside('input__control').domElem.val(url);
                            that.findBlockOutside('page').emit('url_snapshot_set', { url: url });

                            $.ajax(
                                {
                                    url: window.config.api_server + "/api/user/snapshot/",
                                    type: "POST",
                                    data: { url: url },
                                    dataType: "json"
                                }
                            ).done(
                                function (msg) {

                                    that.findBlockOutside('page').emit('url_attachment_set', msg);
                                    if (msg.status != "OK") return ;
                                    
                                    var snapshot_src = window.config.api_server + "/api/user/snapshot" + msg.attachment;

                                    $.ajax(
                                        {
                                            url: snapshot_src,
                                            type: "GET",
                                            dataType: "json"
                                        }
                                    ).done(
                                        function (snap) {
                                            console.log(snap);
                                            that.findBlockOutside('page').emit('url_snapshot_success', snap);

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
