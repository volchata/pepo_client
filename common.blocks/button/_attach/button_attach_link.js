modules.define('button', ['i-bem__dom', 'jquery', 'BEMHTML'],

    function (provide, BEMDOM, $, BEMHTML) {

        provide(BEMDOM.decl({block: this.name, modName: 'attach', modVal: 'link'}, {
            onSetMod: {
                js: {
                    inited: function () {

                        var that = this;

                        this.bindTo('pointerclick', function () {
                            var editor = this.findBlockOutside('compose-block'),
                                old_modal = editor.findBlockInside('compose-modal');

                            if (old_modal) {
                                BEMDOM.destruct(old_modal.domElem);
                            }

                            that.dropElemCache('compose-modal');

                            BEMDOM.append(editor.domElem, BEMHTML.apply({
                                block: 'compose-modal',
                                mods: {mode: 'url'},
                                js: true
                            }));

                        });
                    }
                }
            }

        }));

    });
