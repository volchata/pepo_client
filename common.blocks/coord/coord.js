modules.define('coord', ['i-bem__dom', 'BEMHTML'], function (provide, BEMDOM, BEMHTML) {
    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function () {
                    //this.params._val = 102;

                }
            },
            status: function (modName, modVal/*, oldModVal*/) {
                var self = this;
                switch (modVal) {
                    case 'edit':
                        var latInp = this.findBlockInside('text');
                        BEMDOM.replace(latInp.domElem,
                            BEMHTML.apply({
                                block: 'input',
                                val: self.getVal()
                            }));
                        BEMDOM.replace(latInp.domElem,
                            BEMHTML.apply({
                                block: 'text',
                                content: self.getVal()
                            }));
                        this.toggleMod('status', 'edit');

                        break;
                    case 'view':
                        var latInp = this.findBlockInside('input');
                        BEMDOM.replace(latInp.domElem,
                            BEMHTML.apply({
                                block: 'text',
                                content: self.getVal()
                            }));
                        this.toggleMod('status', 'view');
                            //this.elem('ctrls').length && BEMDOM.destruct(this.elem('ctrls'));

                }
            }

        },
        getVal: function () {
            var input = this.findBlockInside('input');
            if (input) {
                this.params._val = input.getVal();
            }
            return this.params._val;
        },
        setVal: function ($val) {
            this.params._val = $val;

            var input = this.findBlockInside('input');
            if (input) {
                input.setVal($val);
            }
        }
    }

    ));

});
