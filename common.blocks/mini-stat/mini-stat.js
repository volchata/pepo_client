modules.define('mini-stat', ['i-bem__dom'],

    function (provide, BEMDOM) {

        provide(BEMDOM.decl(this.name, {
            onSetMod: {
                'js': {
                    'inited': function () {

                        if (this.params.event == null)
                            return;

                        var emitter = this.findBlockOutside('page');
                        emitter.on(this.params.event, this.update.bind(this) );

                    }
                }
            },
            
            update: function ( e, data ) {
                var s = data.stat;
                this.elem('count').text(s.value);
                if (s.title)
                    this.elem('title').text(s.title);
            }

        }));

    });
