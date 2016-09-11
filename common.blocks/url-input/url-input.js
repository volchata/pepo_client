modules.define('url-input', ['i-bem__dom', 'events__channels', 'jquery', 'BEMHTML'],

    function (provide, BEMDOM, channels, $, BEMHTML) {

        provide(BEMDOM.decl(this.name, {
            onSetMod: {
                'js': {
                    'inited': function () {

                        var self = this;
                        window.urlinput = this;

                        this.inputter = this.findBlockInside('input__control');
                        this.emitter = channels( this.params.channel );
                        this.btn = this.findBlockInside('button');
                        this.btn.bindTo('pointerclick', function () {
                            self.serve();
                        });
                        this.inputter.bindTo('keypress', function (e) {
                            if (e.keyCode == 13) {
                                self.serve();
                            }
                        });
                        this.inputter = this.inputter.domElem;
                    }
                },
                'mode': {
                    'wait': function () {
                        BEMDOM.update( this.elem('container'),
                            BEMHTML.apply({
                                block: 'spinner',
                                size: 40,
                                mods: {'slide': true}
                            })
                        );
                    },
                    'uploaded': function () {
                        BEMDOM.update( this.elem('container'),
                            BEMHTML.apply( {
                                block: 'tweet-attachment',
                                target: this.attachment.url,
                                url: this.attachment.image,
                                title: this.attachment.title
                            } )
                        );
                    },
                    '': function () {
                        BEMDOM.update( this.elem('container') );
                    }
                }
            },

            onUrlSet: function () {
                this.setMod('mode', 'wait');
                this.emitter.emit('progress', {url: this.url, attachment: null});
            },
            onSnapshotSet: function (data) {
                if (data.status != 'OK') {
                    this.delMod('mode');
                    this.emitter.emit('fail');
                    return;
                }
                this.attachment = data.attachment;
                this.emitter.emit('progress', {url: this.url, attachment: this.attachment});
            },
            onUploadReady: function (data) {
                if (data.status != 'OK') {
                    this.attachment = null;
                    this.delMod('mode');
                    this.emitter.emit('fail');
                    return;
                }
                this.attachment = data.attachment;
                this.emitter.emit('success', {url: this.url, attachment: this.attachment});
                this.setMod('mode', 'uploaded');
            },

            serve: function () {
                function prefixOuterURL(url) {
                    var re = /^https?:\/\//;
                    if (!(re.test(url))) {
                        url = 'http://' + url;
                    }
                    return url;
                }

                var self = this,
                    url = prefixOuterURL(this.inputter.val());
                if (this.url === url) {
                    if (this.getMod('mode') === 'wait') return this.delMod('mode');
                    if (this.hasMod('mode')) return ;
                }

                this.url = url;
                this.inputter.val(url);
                this.onUrlSet();

                $.ajax(
                    {
                        url: window.config.api_server + '/api/user/snapshot/',
                        type: 'POST',
                        data: {url: url},
                        dataType: 'json'
                    }
                ).done(
                    function (msg) {
                        if (self.getMod('mode') !== 'wait') return ;

                        self.onSnapshotSet(msg);
                        if (msg.status != 'OK') return ;

                        var snapshot_src = window.config.api_server + '/api/user/snapshot' + msg.attachment;

                        $.ajax(
                            {
                                url: snapshot_src,
                                type: 'GET',
                                dataType: 'json'
                            }
                        ).done(
                            function (snap) {
                                if (self.getMod('mode') !== 'wait') return ;
                                self.onUploadReady(snap);

                            }
                        );
                    }
                );
            }

        }));

    });
